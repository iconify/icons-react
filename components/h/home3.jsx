import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urk_5fbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urk_5fbdp"/>`,
		"fallback": "reicon:home3",
	});
}

export default Component;
