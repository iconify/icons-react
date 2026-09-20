import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bq31312gn.css';
import '../../css/t/tqywg8bxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bq31312gn"/><path class="tqywg8bxa"/></g>`,
		"fallback": "keyline-icons:arrow-big-left-short-two-tone",
	});
}

export default Component;
