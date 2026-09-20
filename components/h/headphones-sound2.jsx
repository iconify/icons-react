import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxm_0qbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cxm_0qbax"/>`,
		"fallback": "reicon:headphones-sound2",
	});
}

export default Component;
