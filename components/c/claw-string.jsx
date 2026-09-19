import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpe525bgn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpe525bgn"/>`,
		"fallback": "game-icons:claw-string",
	});
}

export default Component;
