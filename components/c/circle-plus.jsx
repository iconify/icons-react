import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hth4u7b8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hth4u7b8a"/>`,
		"fallback": "tabler:circle-plus",
	});
}

export default Component;
