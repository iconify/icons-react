import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g88jb2prf.css';
import '../../css/s/s7tj_nz1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g88jb2prf"/><path class="s7tj_nz1w"/>`,
		"fallback": "mingcute:car-line",
	});
}

export default Component;
