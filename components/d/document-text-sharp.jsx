import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw834mbpj.css';
import '../../css/t/tbo0rsbbk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw834mbpj"/><path class="tbo0rsbbk"/>`,
		"fallback": "famicons:document-text-sharp",
	});
}

export default Component;
