import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k71by3b1k.css';
import '../../css/o/obq3yybhr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="k71by3b1k"/><path class="obq3yybhr"/>`,
		"fallback": "ion:contrast-outline",
	});
}

export default Component;
