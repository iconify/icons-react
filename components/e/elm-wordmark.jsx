import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvwku7b_j.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvwku7b_j"/>`,
		"fallback": "devicon-plain:elm-wordmark",
	});
}

export default Component;
