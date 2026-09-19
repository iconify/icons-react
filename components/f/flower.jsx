import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb-eyybsf.css';
import '../../css/e/effisz2bi.css';
import '../../css/i/izvg83llc.css';
import '../../css/a/a0rybjejg.css';
import '../../css/c/c8-rxtcam.css';
import '../../css/b/b73rntb-e.css';
import '../../css/y/ypk_3qk3u.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb-eyybsf"/><defs><circle id="SVGifCBlePx" class="effisz2bi"/></defs><clipPath id="SVGtcVZrdEc"><use href="#SVGifCBlePx"/></clipPath><g clip-path="url(#SVGtcVZrdEc)"><path class="izvg83llc"/><path class="a0rybjejg"/><path class="c8-rxtcam"/><path class="b73rntb-e"/><path class="ypk_3qk3u"/></g>`,
		"fallback": "flat-ui:flower",
	});
}

export default Component;
