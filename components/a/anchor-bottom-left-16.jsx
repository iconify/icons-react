import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eblevacyj.css';
import '../../css/d/d96i7fh6t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eblevacyj"/><path class="d96i7fh6t"/>`,
		"fallback": "qlementine-icons:anchor-bottom-left-16",
	});
}

export default Component;
