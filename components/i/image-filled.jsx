import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fao72i.css';
import '../../css/q/qa-o7h.css';
import '../../css/i/i5u07d.css';
import '../../css/y/ydovum.css';
import '../../css/z/z24blz.css';
import '../../css/p/pun1do.css';
import '../../css/s/so-from-66.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fade-to-1.css';
import '../../css/f/fill-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fao72i qa-o7h"/><path class="i5u07d qa-o7h"/><circle class="ydovum z24blz"/><path class="pun1do ydovum"/>`,
		"fallback": "line-md:image-filled",
	});
}

export default Component;
