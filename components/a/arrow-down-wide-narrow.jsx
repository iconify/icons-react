import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhvusml9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhvusml9d"/>`,
		"fallback": "vadivam:arrow-down-wide-narrow",
	});
}

export default Component;
