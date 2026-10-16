import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8314acox.css';
import '../../css/f/falraebon.css';
import '../../css/l/lhy98hwgj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8314acox"/><path class="falraebon"/><path class="lhy98hwgj"/>`,
		"fallback": "energy-icons:cassette-48-bold",
	});
}

export default Component;
