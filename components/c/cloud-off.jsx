import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/pvf7tv9ss.css';
import '../../css/g/gcz0v_n4i.css';
import '../../css/s/shi8u7lan.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/j/jgtis7b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="pvf7tv9ss"/><path class="gcz0v_n4i wm-shine"/><path class="shi8u7lan wm-k"/><path class="qr4ochb5c wm-s"/><path class="jgtis7b9v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:cloud-off",
	});
}

export default Component;
