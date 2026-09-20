import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvhu34bmd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvhu34bmd"/>`,
		"fallback": "vaadin:grid-big-o",
	});
}

export default Component;
