import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mziq_kboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mziq_kboe"/>`,
		"fallback": "reicon:gameboy-filled",
	});
}

export default Component;
