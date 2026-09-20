import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jrp21-l0v.css';
import '../../css/t/ttwa5ubjw.css';
import '../../css/x/xzymugb3i.css';
import '../../css/k/kqrdbispo.css';
import '../../css/q/qpcpoabzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jrp21-l0v"/><path class="ttwa5ubjw"/><path class="xzymugb3i"/><path class="kqrdbispo"/><path class="qpcpoabzr"/></g>`,
		"fallback": "reicon:empty-wallet-change",
	});
}

export default Component;
