import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f76ef2b7k.css';
import '../../css/s/s0byieb2a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f76ef2b7k"/><path class="s0byieb2a"/>`,
		"fallback": "energy-icons:hvdc-converter-48",
	});
}

export default Component;
