import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xpg7rub1f.css';
import '../../css/k/kdhyjdb1z.css';
import '../../css/h/hpyhpmbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="xpg7rub1f"/><path class="kdhyjdb1z"/><path class="hpyhpmbke"/></g>`,
		"fallback": "streamline-logos:github-logo-1",
	});
}

export default Component;
