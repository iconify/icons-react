import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmlpkrbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmlpkrbag"/>`,
		"fallback": "boxicons:globe-africa-filled",
	});
}

export default Component;
