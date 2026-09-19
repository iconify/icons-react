import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b261mqb5a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b261mqb5a"/>`,
		"fallback": "game-icons:alien-egg",
	});
}

export default Component;
