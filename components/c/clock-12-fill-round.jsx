import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7z428y3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7z428y3d"/>`,
		"fallback": "coolicons:clock-12-fill-round",
	});
}

export default Component;
