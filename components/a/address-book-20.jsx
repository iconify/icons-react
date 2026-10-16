import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8wi2x_6l.css';
import '../../css/p/pvszaybyv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8wi2x_6l"/><path class="pvszaybyv"/>`,
		"fallback": "energy-icons:address-book-20",
	});
}

export default Component;
