import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo3c_0mes.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo3c_0mes"/>`,
		"fallback": "game-icons:grim-reaper",
	});
}

export default Component;
