import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhnqpabwu.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":375,"height":375};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGdOj2Ibak" class="nhnqpabwu"/></defs><use href="#SVGdOj2Ibak" class="d2kvgvbvc"/><use href="#SVGdOj2Ibak" class="d2kvgvbvc"/>`,
		"fallback": "thesvg:glincker",
	});
}

export default Component;
