import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z05v8zbft.css';
import '../../css/h/hpvm9bcft.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z05v8zbft"/><path class="hpvm9bcft"/>`,
		"fallback": "selfhst:cr-nmaster-dark",
	});
}

export default Component;
