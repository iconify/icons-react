import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzfm5-qmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzfm5-qmn"/>`,
		"fallback": "mingcute:cardano-ada-fill",
	});
}

export default Component;
