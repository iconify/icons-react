import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k41w8nb5d.css';
import '../../css/q/qa6864b4v.css';
import '../../css/v/vpl7jxb5u.css';
import '../../css/b/bpj_o18oq.css';
import '../../css/i/izhkpi9bc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k41w8nb5d"/><path class="qa6864b4v"/><path class="vpl7jxb5u"/><path class="bpj_o18oq"/><path class="izhkpi9bc"/>`,
		"fallback": "energy-icons:battery-swap-48-bold",
	});
}

export default Component;
