import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6mhejnyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6mhejnyn"/>`,
		"fallback": "streamline-ultimate:align-middle-bold",
	});
}

export default Component;
