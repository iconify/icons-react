import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj_qicchw.css';
import '../../css/m/mgkbe6uxk.css';
import '../../css/i/i7sr6ubzr.css';
import '../../css/g/g3gxxib9z.css';
import '../../css/s/sdj3236vq.css';
import '../../css/a/a8a4agb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj_qicchw"/><path class="mgkbe6uxk"/><path class="i7sr6ubzr"/><path class="g3gxxib9z"/><path class="sdj3236vq"/><path class="a8a4agb2w"/>`,
		"fallback": "gcp:cloud-scheduler",
	});
}

export default Component;
