import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhytieb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhytieb6s"/>`,
		"fallback": "vadivam:align-horizontal-distribute-center",
	});
}

export default Component;
