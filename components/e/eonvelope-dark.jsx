import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/taqcn9bfg.css';
import '../../css/b/bbny_5ghg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="taqcn9bfg"/><path class="bbny_5ghg"/>`,
		"fallback": "selfhst:eonvelope-dark",
	});
}

export default Component;
