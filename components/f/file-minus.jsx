import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcpq3tb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcpq3tb-s"/>`,
		"fallback": "vadivam:file-minus",
	});
}

export default Component;
