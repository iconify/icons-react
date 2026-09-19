import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oekb3_2rl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oekb3_2rl"/>`,
		"fallback": "icon-park-solid:diamond-two",
	});
}

export default Component;
