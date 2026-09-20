import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/s/s0urbhscb.css';
import '../../css/d/d-llkv2cb.css';
import '../../css/j/jhsistbnu.css';
import '../../css/p/phxo31wwg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGvA5iYcsQ" x1="256" x2="256" y1="506.703" y2="5.298" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".5" class="s0urbhscb"/><stop offset="1" class="d-llkv2cb"/></linearGradient><path fill="url(#SVGvA5iYcsQ)" class="jhsistbnu"/><path class="phxo31wwg"/>`,
		"fallback": "selfhst:databasement-light",
	});
}

export default Component;
