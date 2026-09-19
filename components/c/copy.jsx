import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba6_olbeq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ba6_olbeq"/>`,
		"fallback": "gravity-ui:copy",
	});
}

export default Component;
