import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/p/p23lckr4l.css';
import '../../css/a/azcpz6bsd.css';
import '../../css/o/o8mn3oqfe.css';
import '../../css/b/b9ia3-4ef.css';
import '../../css/p/p_y040bxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGKtcnDeFJ" x1="9.01" x2="15.01" y1="1.5" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGKtcnDeFJ)" class="p23lckr4l"/><path class="azcpz6bsd wm-a"/><path class="o8mn3oqfe wm-shine"/><path class="b9ia3-4ef wm-shine"/><path class="p_y040bxo wm-shine"/></g>`,
		"fallback": "withicons-utsav:clipboard-x",
	});
}

export default Component;
