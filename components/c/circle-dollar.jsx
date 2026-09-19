import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h205pf10p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h205pf10p"/>`,
		"fallback": "gravity-ui:circle-dollar",
	});
}

export default Component;
