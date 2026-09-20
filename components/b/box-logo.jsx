import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fdmro_b8x.css';
import '../../css/h/hx3lo0vra.css';
import '../../css/u/u679rwbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="fdmro_b8x"/><path class="hx3lo0vra"/><path class="u679rwbtv"/></g>`,
		"fallback": "streamline-logos:box-logo",
	});
}

export default Component;
