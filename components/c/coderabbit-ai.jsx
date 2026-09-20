import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd9t200he.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd9t200he"/>`,
		"fallback": "material-icon-theme:coderabbit-ai",
	});
}

export default Component;
