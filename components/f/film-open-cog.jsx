import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm9jy4ulr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm9jy4ulr"/>`,
		"fallback": "mdi:film-open-cog",
	});
}

export default Component;
