import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klk01p-xy.css';
import '../../css/l/lsqc0acbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klk01p-xy"/><path clip-rule="evenodd" class="lsqc0acbg"/>`,
		"fallback": "stash:folder-search-solid",
	});
}

export default Component;
