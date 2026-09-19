import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/peld2mb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="peld2mb6r"/>`,
		"fallback": "hugeicons:cloud-saving-done-02",
	});
}

export default Component;
