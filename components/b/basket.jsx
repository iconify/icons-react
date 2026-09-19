import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l14lsac5f.css';

const viewBox = {"width":750,"height":790};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l14lsac5f"/>`,
		"fallback": "il:basket",
	});
}

export default Component;
