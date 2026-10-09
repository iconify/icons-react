import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmv_a2yqj.css';
import '../../css/c/cobs7vbil.css';
import '../../css/v/vqlps0jzy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmv_a2yqj"/><path class="cobs7vbil"/><path class="vqlps0jzy"/>`,
		"fallback": "energy-icons:borehole-48",
	});
}

export default Component;
