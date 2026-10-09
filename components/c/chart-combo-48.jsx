import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyyebzbnj.css';
import '../../css/w/wz2svgbib.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyyebzbnj"/><path class="wz2svgbib"/>`,
		"fallback": "energy-icons:chart-combo-48",
	});
}

export default Component;
