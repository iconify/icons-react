import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zurdf3b8r.css';
import '../../css/v/vabm_dihy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zurdf3b8r"/><path clip-rule="evenodd" class="vabm_dihy"/>`,
		"fallback": "qlementine-icons:aiff-16",
	});
}

export default Component;
