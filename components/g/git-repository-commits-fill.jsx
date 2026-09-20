import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mui5-zbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mui5-zbii"/>`,
		"fallback": "ri:git-repository-commits-fill",
	});
}

export default Component;
