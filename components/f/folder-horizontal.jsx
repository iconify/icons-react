import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwlcm5sli.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwlcm5sli"/>`,
		"fallback": "fluent-mdl2:folder-horizontal",
	});
}

export default Component;
