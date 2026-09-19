import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7shhm5zc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q7shhm5zc"/>`,
		"fallback": "heroicons:check-badge-20-solid",
	});
}

export default Component;
