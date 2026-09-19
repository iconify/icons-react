import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6f7tdbut.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d6f7tdbut"/>`,
		"fallback": "gravity-ui:face-neutral-dashed",
	});
}

export default Component;
