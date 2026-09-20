import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymjt_ev0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymjt_ev0e"/>`,
		"fallback": "tabler:flag-spark",
	});
}

export default Component;
