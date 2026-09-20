import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/one-8ebop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="one-8ebop"/>`,
		"fallback": "tabler:flag-cog",
	});
}

export default Component;
