import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf4ef19gm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lf4ef19gm"/>`,
		"fallback": "streamline-flex:3d-coordinate-axis-solid",
	});
}

export default Component;
