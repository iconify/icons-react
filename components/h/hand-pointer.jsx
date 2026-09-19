import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9bht_bvv.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9bht_bvv"/>`,
		"fallback": "fa-regular:hand-pointer",
	});
}

export default Component;
