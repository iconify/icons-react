import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ta7j8suqy.css';
import '../../css/y/yvvqu6zho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ta7j8suqy"/><path class="yvvqu6zho"/></g>`,
		"fallback": "keyline-icons:banknote-2-two-tone",
	});
}

export default Component;
