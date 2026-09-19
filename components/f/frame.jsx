import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu1i2oh_t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iu1i2oh_t"/>`,
		"fallback": "gravity-ui:frame",
	});
}

export default Component;
