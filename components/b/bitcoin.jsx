import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cisxu6win.css';
import '../../css/j/jub3nhbzk.css';
import '../../css/m/mx3d42bbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cisxu6win"/><path class="jub3nhbzk"/><path class="mx3d42bbh"/>`,
		"fallback": "uim:bitcoin",
	});
}

export default Component;
