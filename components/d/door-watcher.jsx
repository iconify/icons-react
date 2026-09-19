import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehliqybph.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehliqybph"/>`,
		"fallback": "game-icons:door-watcher",
	});
}

export default Component;
