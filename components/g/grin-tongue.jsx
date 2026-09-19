import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-mg1bbgy.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-mg1bbgy"/>`,
		"fallback": "fa7-regular:grin-tongue",
	});
}

export default Component;
