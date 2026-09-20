import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj-6kbbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj-6kbbik"/>`,
		"fallback": "uil:desktop-slash",
	});
}

export default Component;
