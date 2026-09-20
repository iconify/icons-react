import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uac092bgj.css';
import '../../css/m/m99yuxjsm.css';
import '../../css/z/zsnush0dj.css';
import '../../css/w/wlfsgdzfw.css';
import '../../css/n/n04922jxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="uac092bgj"/><path class="m99yuxjsm"/><path class="zsnush0dj"/><path class="wlfsgdzfw"/><path class="n04922jxw"/></g>`,
		"fallback": "solar:bomb-minimalistic-linear",
	});
}

export default Component;
