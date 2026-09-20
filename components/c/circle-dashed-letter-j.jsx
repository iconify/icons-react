import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmd_nmb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmd_nmb6c"/>`,
		"fallback": "tabler:circle-dashed-letter-j",
	});
}

export default Component;
