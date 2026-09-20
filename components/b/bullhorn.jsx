import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vllwy8brw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vllwy8brw"/>`,
		"fallback": "reicon:bullhorn",
	});
}

export default Component;
