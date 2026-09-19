import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdf4m1b4v.css';
import '../../css/e/e3rrscc8a.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdf4m1b4v"/><path class="e3rrscc8a"/>`,
		"fallback": "formkit:download",
	});
}

export default Component;
