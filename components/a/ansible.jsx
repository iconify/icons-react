import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhjb4mbgw.css';
import '../../css/v/vv_2udbvh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhjb4mbgw"/><path class="vv_2udbvh"/>`,
		"fallback": "devicon:ansible",
	});
}

export default Component;
