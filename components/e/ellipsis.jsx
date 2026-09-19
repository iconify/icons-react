import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpg62mbhy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tpg62mbhy"/>`,
		"fallback": "gravity-ui:ellipsis",
	});
}

export default Component;
