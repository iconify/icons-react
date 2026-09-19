import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znpeg-p4p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="znpeg-p4p"/>`,
		"fallback": "gravity-ui:grip-horizontal",
	});
}

export default Component;
