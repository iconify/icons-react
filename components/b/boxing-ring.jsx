import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy39u9zms.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy39u9zms"/>`,
		"fallback": "game-icons:boxing-ring",
	});
}

export default Component;
