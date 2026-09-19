import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkub0ab9t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkub0ab9t"/>`,
		"fallback": "icomoon-free:font-size",
	});
}

export default Component;
