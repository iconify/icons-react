import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-3dycbxq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-3dycbxq"/>`,
		"fallback": "vaadin:diploma-scroll",
	});
}

export default Component;
