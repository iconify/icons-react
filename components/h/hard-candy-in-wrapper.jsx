import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mixc26bhf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mixc26bhf"/>`,
		"fallback": "pinhead:hard-candy-in-wrapper",
	});
}

export default Component;
