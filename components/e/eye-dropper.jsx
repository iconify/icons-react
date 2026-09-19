import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqrwk8bxv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqrwk8bxv"/>`,
		"fallback": "fa6-solid:eye-dropper",
	});
}

export default Component;
