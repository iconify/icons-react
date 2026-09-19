import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd_8fm84y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd_8fm84y"/>`,
		"fallback": "game-icons:hammer-sickle",
	});
}

export default Component;
