import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mv4as3bxi.css';
import '../../css/o/os7-ocikw.css';
import '../../css/h/hot4egbds.css';
import '../../css/q/qq9gmxdgs.css';
import '../../css/z/zqs1pywbv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="mv4as3bxi"/><path class="os7-ocikw"/><path class="hot4egbds"/><circle class="qq9gmxdgs"/><circle class="zqs1pywbv"/></g>`,
		"fallback": "icon-park:camera-two",
	});
}

export default Component;
