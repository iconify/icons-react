import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln7zp9bqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ln7zp9bqf"/>`,
		"fallback": "reicon:circle-arrows-left",
	});
}

export default Component;
