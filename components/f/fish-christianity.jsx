import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0peox44i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0peox44i"/>`,
		"fallback": "tabler:fish-christianity",
	});
}

export default Component;
