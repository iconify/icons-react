import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-tedebsj.css';
import '../../css/t/tp-8ulbds.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-tedebsj"/><path class="tp-8ulbds"/>`,
		"fallback": "medical-icon:i-no-smoking",
	});
}

export default Component;
