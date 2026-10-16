import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh8gpb9au.css';
import '../../css/f/f_px_ob0l.css';
import '../../css/s/shxbbmbnq.css';
import '../../css/p/ppq8rnbht.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh8gpb9au"/><path class="f_px_ob0l"/><path class="shxbbmbnq"/><path class="ppq8rnbht"/>`,
		"fallback": "energy-icons:extractor-fan-48-bold",
	});
}

export default Component;
