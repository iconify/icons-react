import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so0s9blxr.css';
import '../../css/t/tl7g9qbzd.css';
import '../../css/w/wc10gcirv.css';
import '../../css/w/w313iqk2o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so0s9blxr"/><path class="tl7g9qbzd"/><path class="wc10gcirv"/><path class="w313iqk2o"/>`,
		"fallback": "energy-icons:electric-tractor-20-bold",
	});
}

export default Component;
