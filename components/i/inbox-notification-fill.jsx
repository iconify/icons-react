import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xq7ebza7w.css';
import '../../css/y/yq_jwv13o.css';
import '../../css/z/z6etbudia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGXekBPd0c)" class="cuyn6tgcc"><path class="xq7ebza7w"/><path class="yq_jwv13o"/></g><defs><clipPath id="SVGXekBPd0c"><path class="z6etbudia"/></clipPath></defs></g>`,
		"fallback": "mage:inbox-notification-fill",
	});
}

export default Component;
