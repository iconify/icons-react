import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhwetz1ra.css';
import '../../css/x/xrvh-kbwe.css';
import '../../css/u/u3rfhw5gk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhwetz1ra"/><path class="xrvh-kbwe"/><path class="u3rfhw5gk"/>`,
		"fallback": "selfhst:calico-dark",
	});
}

export default Component;
