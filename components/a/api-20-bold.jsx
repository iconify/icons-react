import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvg-drbfm.css';
import '../../css/f/f0fgz2b6c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvg-drbfm"/><path class="f0fgz2b6c"/>`,
		"fallback": "energy-icons:api-20-bold",
	});
}

export default Component;
