import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evin8v9-e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evin8v9-e"/>`,
		"fallback": "vaadin:chevron-right-small",
	});
}

export default Component;
