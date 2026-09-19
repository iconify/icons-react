import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqi-7acky.css';
import '../../css/b/bw834mbpj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqi-7acky"/><path class="bw834mbpj"/>`,
		"fallback": "famicons:document-sharp",
	});
}

export default Component;
