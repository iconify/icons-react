import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln0p78bsw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln0p78bsw"/>`,
		"fallback": "garden:book-open-stroke-20",
	});
}

export default Component;
