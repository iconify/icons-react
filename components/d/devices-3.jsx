import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srmocb1ra.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srmocb1ra"/>`,
		"fallback": "fluent-mdl2:devices-3",
	});
}

export default Component;
