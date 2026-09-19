import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy91t1bnu.css';
import '../../css/n/nas02gbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy91t1bnu"/><path class="nas02gbsv"/>`,
		"fallback": "bx:border-inner",
	});
}

export default Component;
