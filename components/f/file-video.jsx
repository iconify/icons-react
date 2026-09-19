import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ist_axrux.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ist_axrux"/>`,
		"fallback": "fa-regular:file-video",
	});
}

export default Component;
