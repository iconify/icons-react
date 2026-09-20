import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp_7xjl5p.css';
import '../../css/s/s27o98huz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp_7xjl5p"/><path class="s27o98huz"/>`,
		"fallback": "qlementine-icons:guitar-folk-24",
	});
}

export default Component;
