import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t__qwuc_d.css';
import '../../css/l/lrulo-bxw.css';
import '../../css/u/uak1w0bkv.css';
import '../../css/o/o93ggxb8m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t__qwuc_d"/><path class="lrulo-bxw"/><path class="uak1w0bkv"/><path class="o93ggxb8m"/>`,
		"fallback": "energy-icons:chart-polar-20",
	});
}

export default Component;
