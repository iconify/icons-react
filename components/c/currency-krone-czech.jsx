import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf2llrb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf2llrb2t"/>`,
		"fallback": "tabler:currency-krone-czech",
	});
}

export default Component;
