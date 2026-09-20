import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/b/bojfkac2m.css';
import '../../css/n/nng75lb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="bojfkac2m"/><path class="nng75lb3j"/></g>`,
		"fallback": "streamline-sharp-color:gift-2",
	});
}

export default Component;
