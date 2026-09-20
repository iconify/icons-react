import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g2_2fqttq.css';
import '../../css/c/csffvpb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g2_2fqttq"/><path class="csffvpb7i"/></g>`,
		"fallback": "pixelarticons:at-sign",
	});
}

export default Component;
