import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv9c24b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv9c24b8p"/>`,
		"fallback": "tabler:fall",
	});
}

export default Component;
