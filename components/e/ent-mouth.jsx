import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxrn6gb0p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxrn6gb0p"/>`,
		"fallback": "game-icons:ent-mouth",
	});
}

export default Component;
