import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smq2_2b6c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smq2_2b6c"/>`,
		"fallback": "flat-color-icons:generic-sorting-desc",
	});
}

export default Component;
