import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnzkjzb7y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mnzkjzb7y"/>`,
		"fallback": "gravity-ui:circle-number-8",
	});
}

export default Component;
