import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvc_sdbqe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yvc_sdbqe"/>`,
		"fallback": "gravity-ui:heart-crack",
	});
}

export default Component;
