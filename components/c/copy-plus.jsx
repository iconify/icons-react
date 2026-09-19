import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfgw7gb0h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zfgw7gb0h"/>`,
		"fallback": "gravity-ui:copy-plus",
	});
}

export default Component;
