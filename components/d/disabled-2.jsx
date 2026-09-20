import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r7vcz4bio.css';
import '../../css/f/f3w412r5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r7vcz4bio"/><path class="f3w412r5i"/></g>`,
		"fallback": "tabler:disabled-2",
	});
}

export default Component;
