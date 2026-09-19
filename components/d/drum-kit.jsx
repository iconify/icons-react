import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc3ia1b6f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc3ia1b6f"/>`,
		"fallback": "game-icons:drum-kit",
	});
}

export default Component;
