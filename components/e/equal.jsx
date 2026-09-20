import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcxdw0blf.css';
import '../../css/w/wue79tp2v.css';
import '../../css/n/nda_xfbmv.css';
import '../../css/r/rlm6af3qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kcxdw0blf"/><path class="wue79tp2v"/><path class="nda_xfbmv"/><path class="rlm6af3qk"/>`,
		"fallback": "token:equal",
	});
}

export default Component;
