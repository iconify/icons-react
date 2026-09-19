import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxn8mjf9a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxn8mjf9a"/>`,
		"fallback": "gravity-ui:eye-dashed",
	});
}

export default Component;
