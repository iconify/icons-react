import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udxw1ou3c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udxw1ou3c"/>`,
		"fallback": "garden:folders-stroke-20",
	});
}

export default Component;
