import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_nhushwe.css';
import '../../css/d/dvyctl1bu.css';
import '../../css/w/wvf8eitqm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_nhushwe"/><path class="dvyctl1bu"/><path class="wvf8eitqm"/>`,
		"fallback": "carbon:flight-roster",
	});
}

export default Component;
