import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rns20ob0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rns20ob0m"/>`,
		"fallback": "tdesign:angry-filled",
	});
}

export default Component;
