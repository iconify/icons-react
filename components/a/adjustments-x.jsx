import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh_rwbkdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh_rwbkdh"/>`,
		"fallback": "tabler:adjustments-x",
	});
}

export default Component;
