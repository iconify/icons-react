import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yas0kcb_a.css';
import '../../css/s/sz0y6ba_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yas0kcb_a"/><path class="sz0y6ba_m"/>`,
		"fallback": "streamline-ultimate:content-paper-edit-bold",
	});
}

export default Component;
