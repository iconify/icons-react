import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfm_umb2w.css';
import '../../css/z/zjqxlr-ee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfm_umb2w"/><path clip-rule="evenodd" class="zjqxlr-ee"/>`,
		"fallback": "bitcoin-icons:gift-filled",
	});
}

export default Component;
