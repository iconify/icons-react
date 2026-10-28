import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/c/cxyka7bkv.css';
import '../../css/x/xfe92cbpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="cxyka7bkv"/><path class="xfe92cbpb"/></g>`,
		"fallback": "codex:credit-card",
	});
}

export default Component;
