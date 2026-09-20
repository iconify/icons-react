import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm-5mp_fc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm-5mp_fc"/>`,
		"fallback": "vaadin:briefcase",
	});
}

export default Component;
