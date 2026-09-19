import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/viaa6ubuw.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/x/xprwyhbwt.css';
import '../../css/k/ks7bf8bjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="viaa6ubuw"/><circle class="shu3xdl9q"/><circle class="xprwyhbwt"/><path class="ks7bf8bjr"/></g>`,
		"fallback": "hugeicons:bacteria",
	});
}

export default Component;
