import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/impoytbwp.css';
import '../../css/p/pzxcrqhrr.css';
import '../../css/r/r-d6gqbls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="impoytbwp wm-shadow"/><path class="pzxcrqhrr wm-shadow"/><path class="r-d6gqbls"/></g>`,
		"fallback": "withicons-brutal:dental-chair",
	});
}

export default Component;
