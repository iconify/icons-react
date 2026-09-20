import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyjp2ln2w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyjp2ln2w"/>`,
		"fallback": "pinhead:coconut-palm-tree",
	});
}

export default Component;
