import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezaos2o-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezaos2o-h"/>`,
		"fallback": "fa6-solid:folder-minus",
	});
}

export default Component;
