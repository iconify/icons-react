import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akze_okwn.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akze_okwn"/>`,
		"fallback": "oi:british-pound",
	});
}

export default Component;
