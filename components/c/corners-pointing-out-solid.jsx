import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shdnmpbwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="shdnmpbwg"/>`,
		"fallback": "sidekickicons:corners-pointing-out-solid",
	});
}

export default Component;
