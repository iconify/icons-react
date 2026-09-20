import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvhor06rk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bvhor06rk"/>`,
		"fallback": "streamline-sharp:dashboard-1-solid",
	});
}

export default Component;
