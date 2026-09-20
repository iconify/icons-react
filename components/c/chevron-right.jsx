import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjc_0ibxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjc_0ibxw"/>`,
		"fallback": "vadivam:chevron-right",
	});
}

export default Component;
