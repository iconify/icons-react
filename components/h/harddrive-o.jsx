import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8rxm1btm.css';
import '../../css/j/ji5_h82hg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8rxm1btm"/><path class="ji5_h82hg"/>`,
		"fallback": "vaadin:harddrive-o",
	});
}

export default Component;
