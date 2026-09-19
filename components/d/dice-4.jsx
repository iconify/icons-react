import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9p44xvrw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p9p44xvrw"/>`,
		"fallback": "gravity-ui:dice-4",
	});
}

export default Component;
