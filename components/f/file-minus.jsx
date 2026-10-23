import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3brw-62w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3brw-62w"/>`,
		"fallback": "vadivam:file-minus",
	});
}

export default Component;
