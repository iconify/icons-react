import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz_xm9pdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz_xm9pdf"/>`,
		"fallback": "tabler:circle-dashed-number-4",
	});
}

export default Component;
