import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-pv_7kao.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a-pv_7kao"/>`,
		"fallback": "gravity-ui:bucket-paint",
	});
}

export default Component;
