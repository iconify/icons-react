import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md3qw4bmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md3qw4bmh"/>`,
		"fallback": "mdi:arrow-top-left-bottom-right",
	});
}

export default Component;
