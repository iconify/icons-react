import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjodv2swo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjodv2swo"/>`,
		"fallback": "streamline-ultimate:instrument-classical-piano-bold",
	});
}

export default Component;
