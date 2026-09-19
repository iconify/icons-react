import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxq1d5bzx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxq1d5bzx"/>`,
		"fallback": "dinkie-icons:five-of-bamboos-mahjong-filled",
	});
}

export default Component;
