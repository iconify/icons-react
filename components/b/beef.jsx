import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgi3ubcah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgi3ubcah"/>`,
		"fallback": "vadivam:beef",
	});
}

export default Component;
