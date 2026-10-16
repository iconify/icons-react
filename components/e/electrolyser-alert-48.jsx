import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwukm7kgl.css';
import '../../css/r/r9ka5cc6h.css';
import '../../css/f/f5bqv3-2b.css';
import '../../css/i/ikpbwe38b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwukm7kgl"/><path class="r9ka5cc6h"/><path class="f5bqv3-2b"/><path class="ikpbwe38b"/>`,
		"fallback": "energy-icons:electrolyser-alert-48",
	});
}

export default Component;
