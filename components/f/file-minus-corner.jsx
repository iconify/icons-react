import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgrbkpb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgrbkpb7f"/>`,
		"fallback": "vadivam:file-minus-corner",
	});
}

export default Component;
