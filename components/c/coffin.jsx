import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2sizkbqj.css';
import '../../css/h/hafmr5bae.css';
import '../../css/t/thmz8fbjm.css';
import '../../css/h/h_4609b7v.css';
import '../../css/b/b6goobcro.css';
import '../../css/o/o17wxqhjn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v2sizkbqj"/><path class="hafmr5bae"/><path class="thmz8fbjm"/><path class="h_4609b7v"/><path class="b6goobcro"/><path class="o17wxqhjn"/></g>`,
		"fallback": "fluent-emoji-flat:coffin",
	});
}

export default Component;
