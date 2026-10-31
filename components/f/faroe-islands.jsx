import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmibc4bxr.css';
import '../../css/k/kqjy9abql.css';
import '../../css/x/xp67cuyoc.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmibc4bxr"/><path class="kqjy9abql"/><path class="xp67cuyoc"/>`,
		"fallback": "tabler-flags:faroe-islands",
	});
}

export default Component;
