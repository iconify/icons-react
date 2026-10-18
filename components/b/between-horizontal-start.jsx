import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvrr47wbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvrr47wbl"/>`,
		"fallback": "vadivam:between-horizontal-start",
	});
}

export default Component;
