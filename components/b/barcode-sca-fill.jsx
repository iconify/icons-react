import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t98sw_g9d.css';
import '../../css/q/q2gzyfm-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t98sw_g9d"/><path class="q2gzyfm-f"/>`,
		"fallback": "mingcute:barcode-sca-fill",
	});
}

export default Component;
