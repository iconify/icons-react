import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v29gozgod.css';
import '../../css/m/mv0hob2-c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v29gozgod"/><path class="mv0hob2-c"/>`,
		"fallback": "vaadin:home",
	});
}

export default Component;
