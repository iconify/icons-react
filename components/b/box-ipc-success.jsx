import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm_2zebzp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hm_2zebzp"/>`,
		"fallback": "ix:box-ipc-success",
	});
}

export default Component;
