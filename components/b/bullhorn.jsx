import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6rbzotlw.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6rbzotlw"/>`,
		"fallback": "fa-solid:bullhorn",
	});
}

export default Component;
