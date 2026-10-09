import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqni3wbon.css';
import '../../css/v/vmxlixb3w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqni3wbon"/><path class="vmxlixb3w"/>`,
		"fallback": "energy-icons:coffee-20",
	});
}

export default Component;
