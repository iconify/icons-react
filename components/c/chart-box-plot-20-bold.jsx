import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w01dflzvf.css';
import '../../css/g/go95lyb-o.css';
import '../../css/d/dsc4racke.css';
import '../../css/q/qdq7cabwt.css';
import '../../css/l/leh-9ubya.css';
import '../../css/z/zmd7ce43y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w01dflzvf"/><path class="go95lyb-o"/><path class="dsc4racke"/><path class="qdq7cabwt"/><path class="leh-9ubya"/><path class="zmd7ce43y"/>`,
		"fallback": "energy-icons:chart-box-plot-20-bold",
	});
}

export default Component;
