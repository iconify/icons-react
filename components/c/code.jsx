import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l67el63_x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l67el63_x"/>`,
		"fallback": "gravity-ui:code",
	});
}

export default Component;
