import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj_tpbc1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj_tpbc1j"/>`,
		"fallback": "pixel:divider",
	});
}

export default Component;
