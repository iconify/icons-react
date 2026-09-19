import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8qpv3buc.css';
import '../../css/a/ab4vmibnv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8qpv3buc"/><circle class="ab4vmibnv"/>`,
		"fallback": "garden:gear-stroke-16",
	});
}

export default Component;
