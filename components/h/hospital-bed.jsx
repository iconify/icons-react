import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/zvuy9gv-u.css';
import '../../css/v/vtz6fsb9s.css';
import '../../css/s/srz3teb-n.css';
import '../../css/w/wx_o4xixo.css';
import '../../css/i/i2ejxvg2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="zvuy9gv-u"/><path class="vtz6fsb9s"/><path class="srz3teb-n"/><path class="wx_o4xixo"/><path class="i2ejxvg2j"/></g>`,
		"fallback": "matita:hospital-bed",
	});
}

export default Component;
