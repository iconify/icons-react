import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fra7p-djj.css';
import '../../css/t/t_2-m239s.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fra7p-djj"/><path class="t_2-m239s"/>`,
		"fallback": "tabler-flags:european-union",
	});
}

export default Component;
