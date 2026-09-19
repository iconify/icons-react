import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/h/hd2q04bbt.css';
import '../../css/r/rp5uxwhwm.css';
import '../../css/i/ilcz-6o8j.css';
import '../../css/f/fsf032_mi.css';
import '../../css/r/rytagcdsw.css';
import '../../css/d/dio7tqfse.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="hd2q04bbt"/><path class="rp5uxwhwm"/><path class="ilcz-6o8j"/><path class="fsf032_mi"/><path class="rytagcdsw"/><path class="dio7tqfse"/></g>`,
		"fallback": "icon-park:freeze-line",
	});
}

export default Component;
