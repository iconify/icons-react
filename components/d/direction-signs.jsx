import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7w0psy3j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7w0psy3j"/>`,
		"fallback": "game-icons:direction-signs",
	});
}

export default Component;
