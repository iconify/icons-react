import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wckns2brg.css';
import '../../css/i/if88er1fq.css';
import '../../css/r/rvcfnxbit.css';
import '../../css/k/k0cyj5-rs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGI5k9oeBe" x1="255.5" x2="255.5" y1="991.4" y2="496.6" gradientTransform="matrix(1 0 0 -1 0 1000)" gradientUnits="userSpaceOnUse"><stop offset=".32" class="wckns2brg"/><stop offset=".99" class="if88er1fq"/></linearGradient><circle fill="url(#SVGI5k9oeBe)" class="rvcfnxbit"/><path class="k0cyj5-rs"/>`,
		"fallback": "selfhst:audiobookshelf",
	});
}

export default Component;
