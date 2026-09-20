import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sibtb5ryj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sibtb5ryj"/>`,
		"fallback": "streamline-ultimate:allowances-smoking",
	});
}

export default Component;
