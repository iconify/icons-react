import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzw10rbiw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzw10rbiw"/>`,
		"fallback": "ion:caret-down-sharp",
	});
}

export default Component;
