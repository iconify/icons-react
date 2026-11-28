import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx6hm6b7w.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vq6d8hmfu.css';
import '../../css/g/gmkm8hbfw.css';
import '../../css/p/p8di0eziy.css';
import '../../css/r/r6592acqf.css';
import '../../css/w/wi2zf_h8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx6hm6b7w secondary"/><g class="dt0cm9dhy primary"><path class="vq6d8hmfu"/><path class="gmkm8hbfw"/><path class="p8di0eziy"/><path class="r6592acqf"/><path class="wi2zf_h8s"/></g>`,
		"fallback": "iconaut:globe-arrow-duo",
	});
}

export default Component;
