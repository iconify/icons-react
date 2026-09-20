import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic2-dskkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ic2-dskkq"/>`,
		"fallback": "streamline-sharp:glasses-solid",
	});
}

export default Component;
