import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcce5mspk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcce5mspk"/>`,
		"fallback": "ri:criminal-fill",
	});
}

export default Component;
