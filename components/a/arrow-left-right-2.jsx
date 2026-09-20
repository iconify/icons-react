import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp3su_b5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp3su_b5b"/>`,
		"fallback": "tdesign:arrow-left-right-2",
	});
}

export default Component;
