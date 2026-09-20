import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1oci-bnn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d1oci-bnn"/>`,
		"fallback": "streamline:desktop-check-solid",
	});
}

export default Component;
