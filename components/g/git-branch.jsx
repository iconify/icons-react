import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/b/bnef_pb8w.css';
import '../../css/j/j5u9w_zfh.css';
import '../../css/w/wh2bzxdhv.css';
import '../../css/s/sz-zgn65k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="bnef_pb8w"/><circle class="j5u9w_zfh"/><circle class="wh2bzxdhv"/><path class="sz-zgn65k"/></g>`,
		"fallback": "codex:git-branch",
	});
}

export default Component;
