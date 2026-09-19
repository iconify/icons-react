import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlpcq2vnk.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlpcq2vnk"/>`,
		"fallback": "fa6-solid:file-circle-minus",
	});
}

export default Component;
