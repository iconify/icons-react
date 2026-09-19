import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fphtovbsx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fphtovbsx"/>`,
		"fallback": "gravity-ui:cloud-gear",
	});
}

export default Component;
