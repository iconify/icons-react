import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcu0apbtk.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcu0apbtk"/>`,
		"fallback": "lineicons:camera-movie-1",
	});
}

export default Component;
