import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afafpebrx.css';
import '../../css/s/sv58jibeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afafpebrx"/><path class="sv58jibeh"/>`,
		"fallback": "boxicons:doughnut-chart-filled",
	});
}

export default Component;
