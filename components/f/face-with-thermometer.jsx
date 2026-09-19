import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/km3rq3bin.css';
import '../../css/l/lpw1oqbth.css';
import '../../css/v/v6q52-dnf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="km3rq3bin"/><path class="lpw1oqbth"/><path class="v6q52-dnf"/></g>`,
		"fallback": "fluent-emoji-high-contrast:face-with-thermometer",
	});
}

export default Component;
