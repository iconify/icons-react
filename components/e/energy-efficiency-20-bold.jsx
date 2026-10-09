import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sut7r2bvd.css';
import '../../css/o/oebaf-blw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sut7r2bvd"/><path class="oebaf-blw"/>`,
		"fallback": "energy-icons:energy-efficiency-20-bold",
	});
}

export default Component;
