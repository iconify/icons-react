import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsuy7qb9u.css';
import '../../css/i/if0ri8-so.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsuy7qb9u"/><path class="if0ri8-so"/>`,
		"fallback": "fxemoji:flexbicep",
	});
}

export default Component;
