import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp3lv5b2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp3lv5b2f"/>`,
		"fallback": "ri:ie-fill",
	});
}

export default Component;
