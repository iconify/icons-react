import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu7_ubb2h.css';
import '../../css/g/g11ocj1zr.css';
import '../../css/x/xf66x87di.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu7_ubb2h"/><path class="g11ocj1zr"/><path class="xf66x87di"/>`,
		"fallback": "energy-icons:archive-48",
	});
}

export default Component;
