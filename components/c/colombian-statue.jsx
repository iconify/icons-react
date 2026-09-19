import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztli60bvi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztli60bvi"/>`,
		"fallback": "game-icons:colombian-statue",
	});
}

export default Component;
