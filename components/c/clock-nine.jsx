import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maj947b2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maj947b2w"/>`,
		"fallback": "uit:clock-nine",
	});
}

export default Component;
