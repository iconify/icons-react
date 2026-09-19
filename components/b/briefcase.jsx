import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anz_yn18j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anz_yn18j"/>`,
		"fallback": "heroicons-outline:briefcase",
	});
}

export default Component;
