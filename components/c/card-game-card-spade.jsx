import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1vzvobrg.css';
import '../../css/s/sco2ncz2j.css';
import '../../css/t/tgu2pcaid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1vzvobrg"/><path class="sco2ncz2j"/><path clip-rule="evenodd" class="tgu2pcaid"/>`,
		"fallback": "streamline-freehand:card-game-card-spade",
	});
}

export default Component;
