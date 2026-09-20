import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpk2iddpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpk2iddpe"/>`,
		"fallback": "tabler:circle-dashed-letter-x",
	});
}

export default Component;
