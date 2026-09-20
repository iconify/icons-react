import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbeom1blt.css';
import '../../css/k/kb9-cibvx.css';
import '../../css/y/yqqqumb8z.css';
import '../../css/s/su41t4f1a.css';

const viewBox = {"width":841.89,"height":595.28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGhusBEc7M" class="mbeom1blt"/></defs><path class="kb9-cibvx"/><path class="yqqqumb8z"/><path class="su41t4f1a"/><use href="#SVGhusBEc7M"/><use href="#SVGhusBEc7M"/>`,
		"fallback": "thesvg-color:calendly",
	});
}

export default Component;
