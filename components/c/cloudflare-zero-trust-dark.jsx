import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxmb1c0no.css';
import '../../css/f/fr1kxcbgu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxmb1c0no"/><path class="fr1kxcbgu"/>`,
		"fallback": "selfhst:cloudflare-zero-trust-dark",
	});
}

export default Component;
