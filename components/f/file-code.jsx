import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4bavtbff.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4bavtbff"/>`,
		"fallback": "fa6-regular:file-code",
	});
}

export default Component;
