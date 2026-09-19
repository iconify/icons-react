import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsb-o9f4a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsb-o9f4a"/>`,
		"fallback": "game-icons:abstract-001",
	});
}

export default Component;
