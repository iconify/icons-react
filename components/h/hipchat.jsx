import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tanrs_bkq.css';

const viewBox = {"width":26,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tanrs_bkq"/>`,
		"fallback": "fontisto:hipchat",
	});
}

export default Component;
