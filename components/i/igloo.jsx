import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gmkwqdblk.css';
import '../../css/z/zqttsibyq.css';
import '../../css/r/rt9ok0bqu.css';
import '../../css/i/ig41y4bky.css';
import '../../css/h/hiub-9bnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gmkwqdblk"/><path class="zqttsibyq"/><path class="rt9ok0bqu"/><path clip-rule="evenodd" class="ig41y4bky"/><rect transform="matrix(0 -1 -1 0 19.07 20.15)" class="hiub-9bnl"/></g>`,
		"fallback": "andrsrxn:igloo",
	});
}

export default Component;
