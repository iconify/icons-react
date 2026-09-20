import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efahihb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efahihb3e"/>`,
		"fallback": "solar:end-call-rounded-bold",
	});
}

export default Component;
