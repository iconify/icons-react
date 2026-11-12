import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut0d6c_fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut0d6c_fq"/>`,
		"fallback": "tabler:building-down",
	});
}

export default Component;
