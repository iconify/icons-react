import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py1y6o2db.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py1y6o2db"/>`,
		"fallback": "pinhead:four-legged-octopus-with-cartoon-eyes",
	});
}

export default Component;
