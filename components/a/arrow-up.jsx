import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/col2zcbws.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="col2zcbws"/>`,
		"fallback": "f7:arrow-up",
	});
}

export default Component;
