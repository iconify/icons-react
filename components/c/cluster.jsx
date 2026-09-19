import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydb42tbaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydb42tbaa"/>`,
		"fallback": "grommet-icons:cluster",
	});
}

export default Component;
