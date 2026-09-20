import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xop-chz3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xop-chz3x"/>`,
		"fallback": "vadivam:badge-japanese-yen",
	});
}

export default Component;
