import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjy379omm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjy379omm"/>`,
		"fallback": "lucide:circle-dashed",
	});
}

export default Component;
