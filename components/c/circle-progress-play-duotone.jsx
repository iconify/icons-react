import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wjk7vbbyo.css';
import '../../css/r/r3ta8vl-m.css';
import '../../css/p/p0boiq_tf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wjk7vbbyo"/><path class="r3ta8vl-m"/><path class="p0boiq_tf"/></g>`,
		"fallback": "keyline-icons:circle-progress-play-duotone",
	});
}

export default Component;
