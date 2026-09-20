import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trk91ybqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trk91ybqi"/>`,
		"fallback": "keyline-icons:cctv-off",
	});
}

export default Component;
