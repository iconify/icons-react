import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve3a99k9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve3a99k9w"/>`,
		"fallback": "thesvg:fresh",
	});
}

export default Component;
