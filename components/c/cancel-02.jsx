import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0f5lqbhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0f5lqbhs"/>`,
		"fallback": "hugeicons:cancel-02",
	});
}

export default Component;
