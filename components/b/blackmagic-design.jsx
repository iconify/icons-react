import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd01x7bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd01x7bku"/>`,
		"fallback": "thesvg:blackmagic-design",
	});
}

export default Component;
