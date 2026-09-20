import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kab81ab2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kab81ab2i"/>`,
		"fallback": "simple-icons:acer",
	});
}

export default Component;
