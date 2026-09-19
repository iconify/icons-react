import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dds184q7a.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dds184q7a"/>`,
		"fallback": "fa6-solid:file-shield",
	});
}

export default Component;
