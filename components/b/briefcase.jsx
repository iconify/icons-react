import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1kzacf4g.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1kzacf4g"/>`,
		"fallback": "system-uicons:briefcase",
	});
}

export default Component;
