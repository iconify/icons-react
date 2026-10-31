import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmibc4bxr.css';
import '../../css/y/yseqrvb7u.css';
import '../../css/y/y6mw4bcmk.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmibc4bxr"/><path class="yseqrvb7u"/><path class="y6mw4bcmk"/>`,
		"fallback": "tabler-flags:guernsey",
	});
}

export default Component;
