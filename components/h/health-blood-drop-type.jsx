import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dto3afbko.css';
import '../../css/o/o_eh4ib9k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dto3afbko"/><path class="o_eh4ib9k"/>`,
		"fallback": "streamline-pixel:health-blood-drop-type",
	});
}

export default Component;
