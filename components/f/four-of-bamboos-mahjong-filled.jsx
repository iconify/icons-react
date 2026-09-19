import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hob4cnbgn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hob4cnbgn"/>`,
		"fallback": "dinkie-icons:four-of-bamboos-mahjong-filled",
	});
}

export default Component;
