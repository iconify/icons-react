import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sksg1bb3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sksg1bb3c"/>`,
		"fallback": "vadivam:armenian-dram",
	});
}

export default Component;
