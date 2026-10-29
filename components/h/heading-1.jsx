import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1o-n7bwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1o-n7bwq"/>`,
		"fallback": "vadivam:heading-1",
	});
}

export default Component;
