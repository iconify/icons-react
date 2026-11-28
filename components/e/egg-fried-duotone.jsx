import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twtqz_bpe.css';
import '../../css/r/rpixmibsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary twtqz_bpe"/><path class="primary rpixmibsr"/></g>`,
		"fallback": "iconaut:egg-fried-duotone",
	});
}

export default Component;
