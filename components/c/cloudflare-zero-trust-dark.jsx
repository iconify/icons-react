import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9t4mnboc.css';
import '../../css/f/fr1kxcbgu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9t4mnboc"/><path class="fr1kxcbgu"/>`,
		"fallback": "selfhst:cloudflare-zero-trust-dark",
	});
}

export default Component;
