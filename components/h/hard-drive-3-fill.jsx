import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujvuz525j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujvuz525j"/>`,
		"fallback": "ri:hard-drive-3-fill",
	});
}

export default Component;
