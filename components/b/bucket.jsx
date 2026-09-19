import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tatcbzb1g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tatcbzb1g"/>`,
		"fallback": "gravity-ui:bucket",
	});
}

export default Component;
