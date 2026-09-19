import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwi2rjbdb.css';

const viewBox = {"width":352,"height":520};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwi2rjbdb"/>`,
		"fallback": "ps:extinguisher",
	});
}

export default Component;
