import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwagshezp.css';
import '../../css/n/nfqwn6-5t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwagshezp"/><path class="nfqwn6-5t"/>`,
		"fallback": "energy-icons:brush-48",
	});
}

export default Component;
