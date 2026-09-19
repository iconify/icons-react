import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fko3yrtpi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fko3yrtpi"/>`,
		"fallback": "game-icons:bed-lamp",
	});
}

export default Component;
