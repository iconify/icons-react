import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je9uz5b7m.css';
import '../../css/z/z8_m97b4y.css';
import '../../css/c/c4946-17v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="je9uz5b7m"/><path clip-rule="evenodd" class="z8_m97b4y"/><path class="c4946-17v"/>`,
		"fallback": "solar:clipboard-clock-bold",
	});
}

export default Component;
