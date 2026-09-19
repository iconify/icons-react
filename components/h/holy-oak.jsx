import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvl_8rp-i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvl_8rp-i"/>`,
		"fallback": "game-icons:holy-oak",
	});
}

export default Component;
