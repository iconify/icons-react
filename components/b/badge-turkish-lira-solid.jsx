import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjr09ebid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjr09ebid"/>`,
		"fallback": "iconaut:badge-turkish-lira-solid",
	});
}

export default Component;
