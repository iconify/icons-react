import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu8f02jqm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xu8f02jqm"/>`,
		"fallback": "gravity-ui:face-sad",
	});
}

export default Component;
