import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bddobsb4k.css';
import '../../css/j/jl2yhkqww.css';
import '../../css/b/btg3-9-vx.css';
import '../../css/q/qglkbnbeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bddobsb4k"/><path class="jl2yhkqww"/><path class="btg3-9-vx"/><path class="qglkbnbeu"/>`,
		"fallback": "lineicons:copilot",
	});
}

export default Component;
