import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_ob6yb1f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_ob6yb1f"/>`,
		"fallback": "game-icons:fur-boot",
	});
}

export default Component;
