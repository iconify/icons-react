import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv_bb_ldv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kv_bb_ldv"/>`,
		"fallback": "sidekickicons:git-branch-solid",
	});
}

export default Component;
