import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzj8564wb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzj8564wb"/>`,
		"fallback": "tabler:flag-discount",
	});
}

export default Component;
