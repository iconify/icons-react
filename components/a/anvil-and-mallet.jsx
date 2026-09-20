import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncl2nwb0w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncl2nwb0w"/>`,
		"fallback": "pinhead:anvil-and-mallet",
	});
}

export default Component;
