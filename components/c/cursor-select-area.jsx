import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsee2mmqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsee2mmqq"/>`,
		"fallback": "streamline-cyber:cursor-select-area",
	});
}

export default Component;
