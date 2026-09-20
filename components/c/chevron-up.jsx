import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afz2iulxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afz2iulxd"/>`,
		"fallback": "tdesign:chevron-up",
	});
}

export default Component;
