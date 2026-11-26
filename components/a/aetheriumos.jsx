import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr8f4qvxq.css';
import '../../css/h/h5wc1_b_q.css';
import '../../css/x/xbblbul_m.css';
import '../../css/a/agp7qtb2p.css';

const viewBox = {"width":108,"height":108};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGcDsGxc3q" x1="0%" x2="100%" y1="0%" y2="100%"><stop offset="0%" class="dr8f4qvxq"/><stop offset="100%" class="h5wc1_b_q"/></linearGradient></defs><path fill="url(#SVGcDsGxc3q)" class="xbblbul_m"/><path class="agp7qtb2p"/>`,
		"fallback": "thesvg-color:aetheriumos",
	});
}

export default Component;
