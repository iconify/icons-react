import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwrfwdtmg.css';
import '../../css/z/z_rnxebux.css';
import '../../css/j/j-c6jjbfw.css';
import '../../css/z/zv4b340qo.css';
import '../../css/e/epy119e4r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iwrfwdtmg"/><path class="z_rnxebux"/><path class="j-c6jjbfw"/><path class="zv4b340qo"/><path class="epy119e4r"/></g>`,
		"fallback": "fluent-emoji-flat:face-screaming-in-fear",
	});
}

export default Component;
