import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_4g7047h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_4g7047h"/>`,
		"fallback": "game-icons:earth-africa-europe",
	});
}

export default Component;
