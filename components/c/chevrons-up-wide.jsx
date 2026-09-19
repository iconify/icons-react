import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pndwf3b_h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pndwf3b_h"/>`,
		"fallback": "gravity-ui:chevrons-up-wide",
	});
}

export default Component;
