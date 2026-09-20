import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s89hj8brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s89hj8brv"/>`,
		"fallback": "tabler:clock-hour-3",
	});
}

export default Component;
