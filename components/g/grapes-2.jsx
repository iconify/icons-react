import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5tlv01gu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5tlv01gu"/>`,
		"fallback": "roentgen:grapes-2",
	});
}

export default Component;
