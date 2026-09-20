import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olzavh4ia.css';
import '../../css/w/wqvb8lb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olzavh4ia"/><path clip-rule="evenodd" class="wqvb8lb6b"/>`,
		"fallback": "token:forex",
	});
}

export default Component;
