import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayfjvlbde.css';
import '../../css/p/pb95qppxk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayfjvlbde"/><path class="pb95qppxk"/>`,
		"fallback": "vaadin:building-o",
	});
}

export default Component;
