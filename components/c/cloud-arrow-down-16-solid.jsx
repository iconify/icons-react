import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-ddl3baz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a-ddl3baz"/>`,
		"fallback": "heroicons:cloud-arrow-down-16-solid",
	});
}

export default Component;
