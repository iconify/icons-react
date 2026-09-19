import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m68prj4ad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m68prj4ad"/>`,
		"fallback": "fa6-solid:beer-mug-empty",
	});
}

export default Component;
