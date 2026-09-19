import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6xqsjb9i.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6xqsjb9i"/>`,
		"fallback": "fa6-solid:igloo",
	});
}

export default Component;
