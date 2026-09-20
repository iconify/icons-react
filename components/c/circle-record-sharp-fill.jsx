import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3b6p42rc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g3b6p42rc"/>`,
		"fallback": "keyline-icons:circle-record-sharp-fill",
	});
}

export default Component;
