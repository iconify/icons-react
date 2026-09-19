import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja3el70qp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja3el70qp"/>`,
		"fallback": "bxs:arch",
	});
}

export default Component;
