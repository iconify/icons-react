import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/f/f53-e7bmf.css';
import '../../css/b/buoov3b6c.css';
import '../../css/m/md021-s7v.css';

const viewBox = {"width":1454,"height":1460};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGcRaTnbUE" cx="0" cy="0" r="1" gradientTransform="translate(582.449 501.978)scale(929.086)" href="#SVG1mG4IbVQ"><stop class="vc--wpv5i"/><stop offset=".5" class="f53-e7bmf"/><stop offset="1" class="buoov3b6c"/></radialGradient><linearGradient id="SVG1mG4IbVQ" gradientUnits="userSpaceOnUse"/></defs><path fill="url(#SVGcRaTnbUE)" class="md021-s7v"/>`,
		"fallback": "thesvg-color:baoviet-holdings",
	});
}

export default Component;
