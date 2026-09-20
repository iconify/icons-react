import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8s903bpo.css';
import '../../css/q/qpkq3pbej.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="y8s903bpo"/><path class="qpkq3pbej"/>`,
		"fallback": "material-icon-theme:adobe-photoshop-light",
	});
}

export default Component;
