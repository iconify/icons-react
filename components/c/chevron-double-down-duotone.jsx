import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd03k58vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary zd03k58vi"/>`,
		"fallback": "iconaut:chevron-double-down-duotone",
	});
}

export default Component;
