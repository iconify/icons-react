import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzt1dacmz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzt1dacmz"/>`,
		"fallback": "pinhead:castle-tower-with-battlement-and-spire-and-pennon",
	});
}

export default Component;
