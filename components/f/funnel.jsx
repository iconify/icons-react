import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou-9p9brw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ou-9p9brw"/>`,
		"fallback": "gravity-ui:funnel",
	});
}

export default Component;
