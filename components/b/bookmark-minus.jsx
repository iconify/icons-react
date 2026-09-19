import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9jq5ybcb.css';
import '../../css/b/bxmkebcbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9jq5ybcb"/><path class="bxmkebcbg"/>`,
		"fallback": "boxicons:bookmark-minus",
	});
}

export default Component;
