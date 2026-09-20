import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbva30-wv.css';
import '../../css/h/hs2nkdwup.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbva30-wv"/><path class="hs2nkdwup"/>`,
		"fallback": "streamline-pixel:health-ambulance-car",
	});
}

export default Component;
