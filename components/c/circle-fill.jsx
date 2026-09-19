import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdv_x32nu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mdv_x32nu"/>`,
		"fallback": "gravity-ui:circle-fill",
	});
}

export default Component;
