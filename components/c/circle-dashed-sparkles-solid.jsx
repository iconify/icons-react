import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh_edkpcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh_edkpcq"/>`,
		"fallback": "iconaut:circle-dashed-sparkles-solid",
	});
}

export default Component;
