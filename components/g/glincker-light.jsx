import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo828zbqm.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":375,"height":375};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGsLty1dHV" class="zo828zbqm"/></defs><use href="#SVGsLty1dHV" class="d2kvgvbvc"/><use href="#SVGsLty1dHV" class="d2kvgvbvc"/>`,
		"fallback": "thesvg-color:glincker-light",
	});
}

export default Component;
