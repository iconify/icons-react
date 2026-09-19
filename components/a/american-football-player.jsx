import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ree4tyblg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ree4tyblg"/>`,
		"fallback": "game-icons:american-football-player",
	});
}

export default Component;
