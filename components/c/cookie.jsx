import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1v_5ihpb.css';
import '../../css/s/sco7l5bpn.css';
import '../../css/k/klhdv0ueo.css';
import '../../css/g/g8_0j8b7o.css';
import '../../css/w/w3n24fbgj.css';
import '../../css/z/zh-ujibha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1v_5ihpb"/><circle class="sco7l5bpn"/><circle class="klhdv0ueo"/><circle class="g8_0j8b7o"/><circle class="w3n24fbgj"/><circle class="zh-ujibha"/>`,
		"fallback": "bx:cookie",
	});
}

export default Component;
