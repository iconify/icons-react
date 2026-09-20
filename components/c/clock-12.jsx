import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsas4b2vu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsas4b2vu"/>`,
		"fallback": "vadivam:clock-12",
	});
}

export default Component;
