import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eap8ov2yx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eap8ov2yx"/>`,
		"fallback": "gravity-ui:circle-play-fill",
	});
}

export default Component;
