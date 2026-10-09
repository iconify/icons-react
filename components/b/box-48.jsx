import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8_bhcc6x.css';
import '../../css/i/i0wzpzqff.css';
import '../../css/x/x3jtncb2f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8_bhcc6x"/><path class="i0wzpzqff"/><path class="x3jtncb2f"/>`,
		"fallback": "energy-icons:box-48",
	});
}

export default Component;
