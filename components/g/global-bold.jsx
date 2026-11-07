import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7_h2kbdq.css';
import '../../css/h/hf83gzbzx.css';
import '../../css/s/sh7ni8bsi.css';
import '../../css/j/j3sofdbhr.css';
import '../../css/y/yfwp74xij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k7_h2kbdq"/><path class="hf83gzbzx"/><path class="sh7ni8bsi"/><path class="j3sofdbhr"/><path class="yfwp74xij"/>`,
		"fallback": "solar:global-bold",
	});
}

export default Component;
