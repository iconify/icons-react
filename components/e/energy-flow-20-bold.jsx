import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_xg23xbo.css';
import '../../css/y/y5ccdmbcq.css';
import '../../css/p/p1e2i1bne.css';
import '../../css/q/qpsxe7qzz.css';
import '../../css/u/u8qqsxbtk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_xg23xbo"/><path class="y5ccdmbcq"/><path class="p1e2i1bne"/><path class="qpsxe7qzz"/><path class="u8qqsxbtk"/>`,
		"fallback": "energy-icons:energy-flow-20-bold",
	});
}

export default Component;
