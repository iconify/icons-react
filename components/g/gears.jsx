import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veb_vob-l.css';

const viewBox = {"width":1024,"height":962};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veb_vob-l"/>`,
		"fallback": "whh:gears",
	});
}

export default Component;
