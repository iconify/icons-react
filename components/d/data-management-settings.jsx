import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0z2k8bik.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0z2k8bik"/>`,
		"fallback": "fluent-mdl2:data-management-settings",
	});
}

export default Component;
