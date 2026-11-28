import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6a4gs6js.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6a4gs6js"/>`,
		"fallback": "noviair-light:image-off",
	});
}

export default Component;
