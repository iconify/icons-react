import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxg2qie0m.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxg2qie0m"/>`,
		"fallback": "f7:cloud-heavyrain-fill",
	});
}

export default Component;
