import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed6azwwva.css';
import '../../css/k/k65ziybib.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed6azwwva"/><path class="k65ziybib"/>`,
		"fallback": "selfhst:geeftlist",
	});
}

export default Component;
