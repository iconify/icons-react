import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj2n_6b5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj2n_6b5j"/>`,
		"fallback": "mdi:android-head",
	});
}

export default Component;
