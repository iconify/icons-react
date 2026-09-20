import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/r/rjderz9hm.css';
import '../../css/n/nnadpqbsm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="rjderz9hm"/><path class="nnadpqbsm"/></g>`,
		"fallback": "streamline-color:arrow-curvy-up-down-2",
	});
}

export default Component;
