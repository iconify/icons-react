import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_b70x2np.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_b70x2np"/>`,
		"fallback": "pinhead:fork-beside-knife",
	});
}

export default Component;
