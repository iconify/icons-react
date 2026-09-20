import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcxdw0blf.css';
import '../../css/b/bxxmg1bnf.css';
import '../../css/c/cf5h_9dkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kcxdw0blf"/><path class="bxxmg1bnf"/><path class="cf5h_9dkf"/>`,
		"fallback": "token:bcb",
	});
}

export default Component;
