import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkah51bta.css';
import '../../css/h/h5gugn-ip.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkah51bta"/><path class="h5gugn-ip"/>`,
		"fallback": "vaadin:del",
	});
}

export default Component;
