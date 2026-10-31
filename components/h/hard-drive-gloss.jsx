import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt_lsqbdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt_lsqbdg"/>`,
		"fallback": "withicons:hard-drive-gloss",
	});
}

export default Component;
