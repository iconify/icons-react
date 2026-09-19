import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bznvht37f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bznvht37f"/>`,
		"fallback": "ion:car-sharp",
	});
}

export default Component;
