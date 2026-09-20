import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi7qo4bfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi7qo4bfa"/>`,
		"fallback": "tdesign:institution-filled",
	});
}

export default Component;
