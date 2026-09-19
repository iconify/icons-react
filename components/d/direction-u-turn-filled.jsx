import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saty3nwhh.css';
import '../../css/n/nhm009g7n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="saty3nwhh"/><path class="nhm009g7n"/>`,
		"fallback": "carbon:direction-u-turn-filled",
	});
}

export default Component;
