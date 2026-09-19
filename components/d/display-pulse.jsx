import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u32249byq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u32249byq"/>`,
		"fallback": "gravity-ui:display-pulse",
	});
}

export default Component;
