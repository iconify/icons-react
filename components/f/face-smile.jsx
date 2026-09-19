import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1-fv-bqz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t1-fv-bqz"/>`,
		"fallback": "gravity-ui:face-smile",
	});
}

export default Component;
