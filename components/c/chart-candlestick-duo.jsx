import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phmyf0b9q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/if_fr7tub.css';
import '../../css/d/dd77q5buj.css';
import '../../css/u/udn08f86y.css';
import '../../css/z/z_rx2jgli.css';
import '../../css/h/ht09lzbeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phmyf0b9q secondary"/><g class="dt0cm9dhy primary"><path class="if_fr7tub"/><path class="dd77q5buj"/><path class="udn08f86y"/><path class="z_rx2jgli"/><path class="ht09lzbeu"/></g>`,
		"fallback": "iconaut:chart-candlestick-duo",
	});
}

export default Component;
