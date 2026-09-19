import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b85cdcb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b85cdcb_r"/>`,
		"fallback": "bxs:bug",
	});
}

export default Component;
