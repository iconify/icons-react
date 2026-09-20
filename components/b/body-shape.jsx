import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7mu9cjrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y7mu9cjrt"/>`,
		"fallback": "reicon:body-shape",
	});
}

export default Component;
