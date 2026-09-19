import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpb55zepl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpb55zepl"/>`,
		"fallback": "icomoon-free:arrow-up2",
	});
}

export default Component;
