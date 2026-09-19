import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt893gged.css';
import '../../css/e/eg39dacou.css';
import '../../css/f/fd1dolbaw.css';
import '../../css/m/m9u7wsbua.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt893gged"/><path class="eg39dacou"/><path class="fd1dolbaw"/><path class="m9u7wsbua"/>`,
		"fallback": "fxemoji:clock7oclock",
	});
}

export default Component;
