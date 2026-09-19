import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj33xlbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj33xlbby"/>`,
		"fallback": "hugeicons:croissant",
	});
}

export default Component;
