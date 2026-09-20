import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gguhd1zyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gguhd1zyf"/>`,
		"fallback": "thesvg-color:insta360",
	});
}

export default Component;
