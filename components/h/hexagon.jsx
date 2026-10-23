import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dltmk68dv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dltmk68dv"/>`,
		"fallback": "vadivam:hexagon",
	});
}

export default Component;
