import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zni5_hulp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zni5_hulp"/>`,
		"fallback": "streamline-ultimate:house-chimney-bold",
	});
}

export default Component;
