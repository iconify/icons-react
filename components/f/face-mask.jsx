import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/b2e9t9vkt.css';
import '../../css/s/sr_hvjb1x.css';
import '../../css/w/w5ksl4b4f.css';
import '../../css/f/ft74b4bft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="b2e9t9vkt wm-shadow"/><path class="sr_hvjb1x wm-shadow"/><path class="w5ksl4b4f"/><path class="ft74b4bft"/></g>`,
		"fallback": "withicons-brutal:face-mask",
	});
}

export default Component;
