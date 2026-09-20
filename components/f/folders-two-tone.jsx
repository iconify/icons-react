import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jwx1rsb9w.css';
import '../../css/a/abq3ht95i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jwx1rsb9w"/><path class="abq3ht95i"/></g>`,
		"fallback": "keyline-icons:folders-two-tone",
	});
}

export default Component;
