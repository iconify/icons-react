import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao4wlibpe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao4wlibpe"/>`,
		"fallback": "game-icons:foundry-bucket",
	});
}

export default Component;
