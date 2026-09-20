import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wugwonb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wugwonb5s"/>`,
		"fallback": "reicon:arrow-up5-filled",
	});
}

export default Component;
