import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y30s81bis.css';
import '../../css/b/bgmrj3pax.css';
import '../../css/w/wx83d8hml.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y30s81bis"/><path class="bgmrj3pax"/><path class="wx83d8hml"/>`,
		"fallback": "energy-icons:biogas-digester-20",
	});
}

export default Component;
