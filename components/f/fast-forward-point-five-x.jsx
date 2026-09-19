import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrv_3ebjr.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrv_3ebjr"/>`,
		"fallback": "fluent-mdl2:fast-forward-point-five-x",
	});
}

export default Component;
