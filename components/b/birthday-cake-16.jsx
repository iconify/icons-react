import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhic9evto.css';
import '../../css/o/omhpelwiu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uhic9evto"/><path class="omhpelwiu"/>`,
		"fallback": "qlementine-icons:birthday-cake-16",
	});
}

export default Component;
