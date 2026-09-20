import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftupilb-m.css';
import '../../css/l/lgcy8m5fs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ftupilb-m"/><path class="lgcy8m5fs"/>`,
		"fallback": "qlementine-icons:call-out-16",
	});
}

export default Component;
