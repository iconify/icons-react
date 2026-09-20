import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awzzv57ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awzzv57ul"/>`,
		"fallback": "tabler:device-imac-cog",
	});
}

export default Component;
