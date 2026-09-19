import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drytl15lb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drytl15lb"/>`,
		"fallback": "famicons:albums-sharp",
	});
}

export default Component;
