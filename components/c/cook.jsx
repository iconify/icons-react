import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouer3jrlc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouer3jrlc"/>`,
		"fallback": "game-icons:cook",
	});
}

export default Component;
