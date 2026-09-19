import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcznqro8c.css';
import '../../css/g/gsn7st_me.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcznqro8c"/><path class="gsn7st_me"/>`,
		"fallback": "bxl:baidu",
	});
}

export default Component;
