import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw5w5orfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jw5w5orfr"/>`,
		"fallback": "nrk:ellipsis-circle-solid",
	});
}

export default Component;
