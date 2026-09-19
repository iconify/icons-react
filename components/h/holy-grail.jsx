import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojit29lhe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojit29lhe"/>`,
		"fallback": "game-icons:holy-grail",
	});
}

export default Component;
