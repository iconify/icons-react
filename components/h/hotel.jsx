import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9aia9hpz.css';
import '../../css/p/pugdz89pv.css';
import '../../css/w/w9qp1h67f.css';
import '../../css/q/qfphbb72u.css';
import '../../css/d/djucbdc3s.css';
import '../../css/a/ahps_9uuz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9aia9hpz"/><path class="pugdz89pv"/><path class="w9qp1h67f"/><path class="qfphbb72u"/><path class="djucbdc3s"/><path class="ahps_9uuz"/>`,
		"fallback": "fxemoji:hotel",
	});
}

export default Component;
