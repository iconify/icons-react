import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmld1dbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmld1dbat"/>`,
		"fallback": "tdesign:city-9-filled",
	});
}

export default Component;
