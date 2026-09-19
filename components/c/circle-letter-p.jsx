import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph-t_0mkb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ph-t_0mkb"/>`,
		"fallback": "gravity-ui:circle-letter-p",
	});
}

export default Component;
