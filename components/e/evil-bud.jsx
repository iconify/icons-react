import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwmtvib-l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwmtvib-l"/>`,
		"fallback": "game-icons:evil-bud",
	});
}

export default Component;
