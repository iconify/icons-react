import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of6l21bxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of6l21bxe"/>`,
		"fallback": "tdesign:format-painter-filled",
	});
}

export default Component;
