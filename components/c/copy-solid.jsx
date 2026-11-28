import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udf4sdb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udf4sdb6j"/>`,
		"fallback": "iconaut:copy-solid",
	});
}

export default Component;
