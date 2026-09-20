import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhv3jp_gm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhv3jp_gm"/>`,
		"fallback": "streamline-plump:arrow-turn-down-large-solid",
	});
}

export default Component;
