import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzg_r58ne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzg_r58ne"/>`,
		"fallback": "solar:black-hole-3-bold",
	});
}

export default Component;
