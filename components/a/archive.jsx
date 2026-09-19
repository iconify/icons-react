import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arezy-bab.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arezy-bab"/>`,
		"fallback": "codicon:archive",
	});
}

export default Component;
