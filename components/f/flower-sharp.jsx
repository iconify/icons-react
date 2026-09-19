import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2tprwbpc.css';
import '../../css/v/vwxhrfbti.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="x2tprwbpc"/><path class="vwxhrfbti"/>`,
		"fallback": "famicons:flower-sharp",
	});
}

export default Component;
