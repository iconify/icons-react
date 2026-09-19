import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4374ht6g.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4374ht6g"/>`,
		"fallback": "fa6-solid:hand-holding-droplet",
	});
}

export default Component;
