import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brydu94pb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brydu94pb"/>`,
		"fallback": "game-icons:emerald-necklace",
	});
}

export default Component;
