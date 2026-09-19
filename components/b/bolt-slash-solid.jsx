import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwdolb3yd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwdolb3yd"/>`,
		"fallback": "heroicons:bolt-slash-solid",
	});
}

export default Component;
