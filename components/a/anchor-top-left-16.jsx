import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pltnho7ea.css';
import '../../css/v/voyj7e3gc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pltnho7ea"/><path class="voyj7e3gc"/>`,
		"fallback": "qlementine-icons:anchor-top-left-16",
	});
}

export default Component;
