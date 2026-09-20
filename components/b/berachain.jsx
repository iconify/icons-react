import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drfbo4b6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drfbo4b6f"/>`,
		"fallback": "token:berachain",
	});
}

export default Component;
