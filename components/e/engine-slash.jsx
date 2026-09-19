import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmvr9pbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmvr9pbik"/>`,
		"fallback": "hugeicons:engine-slash",
	});
}

export default Component;
