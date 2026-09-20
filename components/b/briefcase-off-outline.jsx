import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwuz2mi4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwuz2mi4k"/>`,
		"fallback": "mdi:briefcase-off-outline",
	});
}

export default Component;
