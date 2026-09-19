import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx5v6zsnz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx5v6zsnz"/>`,
		"fallback": "game-icons:earth-asia-oceania",
	});
}

export default Component;
