import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbvk0jbkh.css';
import '../../css/s/sxrldrbfc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbvk0jbkh"/><path class="sxrldrbfc"/>`,
		"fallback": "selfhst:hyperhdr",
	});
}

export default Component;
