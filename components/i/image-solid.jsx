import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g18k1pb8p.css';
import '../../css/s/s4_j3-_9s.css';
import '../../css/i/i7sr6ubzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g18k1pb8p"/><path class="s4_j3-_9s"/><path class="i7sr6ubzr"/>`,
		"fallback": "pixel:image-solid",
	});
}

export default Component;
