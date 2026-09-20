import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/ppb434h0r.css';
import '../../css/n/nti4qubnf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ppb434h0r"/><path class="nti4qubnf"/></g>`,
		"fallback": "streamline:business-idea-money",
	});
}

export default Component;
