import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovvqqccal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ovvqqccal"/>`,
		"fallback": "thesvg-color:baai",
	});
}

export default Component;
