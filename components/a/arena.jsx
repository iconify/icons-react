import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbn6_er5f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbn6_er5f"/>`,
		"fallback": "game-icons:arena",
	});
}

export default Component;
