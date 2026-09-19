import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cag813bfc.css';
import '../../css/g/givljsy1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cag813bfc"/><path class="givljsy1s"/>`,
		"fallback": "boxicons:arrow-cross-filled",
	});
}

export default Component;
