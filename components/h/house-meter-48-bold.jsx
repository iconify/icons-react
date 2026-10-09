import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxvnz_b5x.css';
import '../../css/n/nt25dib9o.css';
import '../../css/h/hf3904beo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxvnz_b5x"/><path class="nt25dib9o"/><path class="hf3904beo"/>`,
		"fallback": "energy-icons:house-meter-48-bold",
	});
}

export default Component;
