import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vm-psu7uv.css';
import '../../css/c/cxt_p6ale.css';
import '../../css/v/vzrs0lbih.css';
import '../../css/b/blxkck8qi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vm-psu7uv"/><path class="cxt_p6ale"/><path class="vzrs0lbih"/><path class="blxkck8qi"/></g>`,
		"fallback": "fluent-emoji-flat:frog",
	});
}

export default Component;
