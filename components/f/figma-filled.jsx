import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp1639kxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp1639kxv"/>`,
		"fallback": "griddy-icons:figma-filled",
	});
}

export default Component;
