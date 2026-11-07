import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7jv9kugu.css';
import '../../css/n/nk6ny4bnw.css';
import '../../css/j/j601azbqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7jv9kugu"/><path clip-rule="evenodd" class="nk6ny4bnw"/><path class="j601azbqu"/>`,
		"fallback": "solar:gallery-bold-duotone",
	});
}

export default Component;
