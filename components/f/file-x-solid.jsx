import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re3gqubbr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="re3gqubbr"/>`,
		"fallback": "teenyicons:file-x-solid",
	});
}

export default Component;
