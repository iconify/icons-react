import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm04citcf.css';
import '../../css/k/ke05x4qzq.css';
import '../../css/m/mnll-hb2q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm04citcf"/><path class="ke05x4qzq"/><path class="mnll-hb2q"/>`,
		"fallback": "selfhst:cloudflare-zero-trust",
	});
}

export default Component;
