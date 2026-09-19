import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfr5h3cft.css';
import '../../css/b/b4j54ubbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfr5h3cft"/><path class="b4j54ubbl"/>`,
		"fallback": "boxicons:chevrons-left-filled",
	});
}

export default Component;
