import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc-ua0jey.css';
import '../../css/j/jdy3hm0zi.css';
import '../../css/m/m18nddcif.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc-ua0jey"/><path class="jdy3hm0zi"/><path class="m18nddcif"/>`,
		"fallback": "fxemoji:baseball",
	});
}

export default Component;
