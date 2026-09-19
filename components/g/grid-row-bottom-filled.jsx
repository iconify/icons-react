import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da9mj-b_s.css';
import '../../css/n/neukm1fuz.css';
import '../../css/b/bhbvqjyxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="da9mj-b_s"/><rect class="neukm1fuz"/><rect class="bhbvqjyxk"/>`,
		"fallback": "boxicons:grid-row-bottom-filled",
	});
}

export default Component;
