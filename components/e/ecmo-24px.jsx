import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqe610a-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zqe610a-e"/>`,
		"fallback": "healthicons:ecmo-24px",
	});
}

export default Component;
