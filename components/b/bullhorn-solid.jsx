import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x974jcb9h.css';
import '../../css/w/w6uyb-bug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x974jcb9h"/><path class="w6uyb-bug"/>`,
		"fallback": "basil:bullhorn-solid",
	});
}

export default Component;
