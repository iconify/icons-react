import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hts7njbxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hts7njbxq"/>`,
		"fallback": "mynaui:check-circle-solid",
	});
}

export default Component;
