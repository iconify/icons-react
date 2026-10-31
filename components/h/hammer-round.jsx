import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iln4uew0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iln4uew0k"/>`,
		"fallback": "coolicons:hammer-round",
	});
}

export default Component;
