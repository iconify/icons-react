import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kma08ubea.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kma08ubea"/>`,
		"fallback": "gravity-ui:circle-stop-fill",
	});
}

export default Component;
