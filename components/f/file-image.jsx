import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmu8-9b0d.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmu8-9b0d"/>`,
		"fallback": "fa-regular:file-image",
	});
}

export default Component;
