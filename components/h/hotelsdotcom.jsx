import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhengrbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhengrbvq"/>`,
		"fallback": "simple-icons:hotelsdotcom",
	});
}

export default Component;
