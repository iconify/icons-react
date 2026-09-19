import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erzf03bmv.css';
import '../../css/k/kz-4aygch.css';
import '../../css/t/t3nixybku.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erzf03bmv"/><path id="SVGhAjJQcsI" class="kz-4aygch"/><use width="100%" height="100%" href="#SVGhAjJQcsI" transform="matrix(-1 0 0 1 462.7 0)"/><path class="t3nixybku"/>`,
		"fallback": "flag:cy-1x1",
	});
}

export default Component;
