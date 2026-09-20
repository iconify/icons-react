import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c70u1_9qk.css';
import '../../css/y/y_nsz_h-y.css';
import '../../css/g/gzhzl4bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c70u1_9qk"/><circle class="y_nsz_h-y"/><path class="gzhzl4bww"/></g>`,
		"fallback": "reicon:eye-open",
	});
}

export default Component;
