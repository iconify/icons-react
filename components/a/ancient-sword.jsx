import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6wpg2e-t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6wpg2e-t"/>`,
		"fallback": "game-icons:ancient-sword",
	});
}

export default Component;
