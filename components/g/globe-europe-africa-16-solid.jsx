import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv_5ogdeu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qv_5ogdeu"/>`,
		"fallback": "heroicons:globe-europe-africa-16-solid",
	});
}

export default Component;
