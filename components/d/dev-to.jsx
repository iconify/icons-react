import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h909xs_ob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h909xs_ob"/>`,
		"fallback": "bxl:dev-to",
	});
}

export default Component;
