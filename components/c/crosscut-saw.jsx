import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw9k7gdnw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw9k7gdnw"/>`,
		"fallback": "game-icons:crosscut-saw",
	});
}

export default Component;
