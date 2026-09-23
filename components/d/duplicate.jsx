import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xznyf5bpe.css';
import '../../css/e/emyk_ebyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xznyf5bpe"/><path class="emyk_ebyx"/></g>`,
		"fallback": "tabler:duplicate",
	});
}

export default Component;
