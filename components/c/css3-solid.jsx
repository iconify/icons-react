import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s46uwy_pw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s46uwy_pw"/>`,
		"fallback": "teenyicons:css3-solid",
	});
}

export default Component;
