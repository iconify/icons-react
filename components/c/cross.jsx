import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le7_c61zy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le7_c61zy"/>`,
		"fallback": "vadivam:cross",
	});
}

export default Component;
