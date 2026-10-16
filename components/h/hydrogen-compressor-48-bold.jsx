import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzxt0mswz.css';
import '../../css/f/fnuad0uhx.css';
import '../../css/k/kzyi2ibpl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzxt0mswz"/><path class="fnuad0uhx"/><path class="kzyi2ibpl"/>`,
		"fallback": "energy-icons:hydrogen-compressor-48-bold",
	});
}

export default Component;
