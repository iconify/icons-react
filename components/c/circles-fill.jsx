import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwqu8dbtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gwqu8dbtf"/>`,
		"fallback": "keyline-icons:circles-fill",
	});
}

export default Component;
