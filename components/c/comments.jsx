import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otnxsdo2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="otnxsdo2o"/>`,
		"fallback": "stash:comments",
	});
}

export default Component;
