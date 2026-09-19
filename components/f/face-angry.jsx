import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xns0jwtlf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xns0jwtlf"/>`,
		"fallback": "gravity-ui:face-angry",
	});
}

export default Component;
