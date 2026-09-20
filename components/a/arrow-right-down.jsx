import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tken0i2np.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tken0i2np"/>`,
		"fallback": "memory:arrow-right-down",
	});
}

export default Component;
