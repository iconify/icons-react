import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiajmhv2g.css';
import '../../css/l/l0nhtrb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiajmhv2g"/><path class="l0nhtrb7c"/>`,
		"fallback": "streamline-ultimate:app-window-bookmark-bold",
	});
}

export default Component;
