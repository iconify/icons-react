import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk-9sabgk.css';
import '../../css/s/so2937y5n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk-9sabgk"/><path class="so2937y5n"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-game-pool-snooker-ball",
	});
}

export default Component;
