import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipsufrbsj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ipsufrbsj"/>`,
		"fallback": "gravity-ui:folder-lock",
	});
}

export default Component;
