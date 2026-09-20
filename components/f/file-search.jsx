import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tipmx-bid.css';
import '../../css/g/gnxrllo6o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tipmx-bid"/><path class="gnxrllo6o"/>`,
		"fallback": "vaadin:file-search",
	});
}

export default Component;
