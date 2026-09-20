import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul7_2-b5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul7_2-b5m"/>`,
		"fallback": "tabler:folder-cog",
	});
}

export default Component;
