import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj_2pgc9w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj_2pgc9w"/>`,
		"fallback": "pinhead:car-battery",
	});
}

export default Component;
