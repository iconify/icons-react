import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u66vm_5px.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u66vm_5px"/>`,
		"fallback": "material-icon-theme:audio",
	});
}

export default Component;
