import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v194byb7j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v194byb7j"/>`,
		"fallback": "pinhead:droplet-with-shine",
	});
}

export default Component;
