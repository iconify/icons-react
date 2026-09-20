import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws80ii3ha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ws80ii3ha"/>`,
		"fallback": "reicon:buildings-2",
	});
}

export default Component;
