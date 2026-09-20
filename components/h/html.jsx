import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nldzu7q_z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nldzu7q_z"/>`,
		"fallback": "material-icon-theme:html",
	});
}

export default Component;
