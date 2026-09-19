import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iami2m70c.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iami2m70c"/>`,
		"fallback": "f7:cloud-download-fill",
	});
}

export default Component;
