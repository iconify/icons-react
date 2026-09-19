import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn5-me7co.css';
import '../../css/x/xpeiq2kly.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn5-me7co"/><path class="xpeiq2kly"/>`,
		"fallback": "gis:globe-star",
	});
}

export default Component;
