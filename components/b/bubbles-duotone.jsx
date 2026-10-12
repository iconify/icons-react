import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gmzmcdb2d.css';
import '../../css/n/nr_-csbne.css';
import '../../css/i/il59yor0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gmzmcdb2d"/><path class="nr_-csbne"/><path class="il59yor0x"/></g>`,
		"fallback": "lucide-extended:bubbles-duotone",
	});
}

export default Component;
