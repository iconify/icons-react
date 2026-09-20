import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6pi_beqa.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6pi_beqa"/>`,
		"fallback": "memory:application-code",
	});
}

export default Component;
