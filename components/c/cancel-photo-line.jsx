import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk3ve9yfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk3ve9yfu"/>`,
		"fallback": "si:cancel-photo-line",
	});
}

export default Component;
