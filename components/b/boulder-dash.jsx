import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpv-k9b9t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpv-k9b9t"/>`,
		"fallback": "game-icons:boulder-dash",
	});
}

export default Component;
