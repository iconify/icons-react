import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixbt-153a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixbt-153a"/>`,
		"fallback": "mdi:cards-playing-diamond",
	});
}

export default Component;
