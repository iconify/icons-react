import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tq9-hof9v.css';
import '../../css/r/rtjmuzzpz.css';
import '../../css/s/ss28ywb2k.css';
import '../../css/p/pmzs0tmcf.css';
import '../../css/x/xv2jcbxlh.css';
import '../../css/t/tt6pu42kn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tq9-hof9v"/><path clip-rule="evenodd" class="rtjmuzzpz"/><path class="ss28ywb2k"/><path class="pmzs0tmcf"/><path clip-rule="evenodd" class="xv2jcbxlh"/><path clip-rule="evenodd" class="tt6pu42kn"/></g>`,
		"fallback": "pepicons:gift-print",
	});
}

export default Component;
