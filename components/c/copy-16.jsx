import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs5cgacrv.css';
import '../../css/o/o28durbsd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fs5cgacrv"/><path class="o28durbsd"/>`,
		"fallback": "qlementine-icons:copy-16",
	});
}

export default Component;
