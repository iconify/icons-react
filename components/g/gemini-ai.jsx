import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpbd8hs9r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpbd8hs9r"/>`,
		"fallback": "material-icon-theme:gemini-ai",
	});
}

export default Component;
