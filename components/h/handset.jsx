import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlv67-bal.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wlv67-bal"/>`,
		"fallback": "gravity-ui:handset",
	});
}

export default Component;
