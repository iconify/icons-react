import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz6utjsfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz6utjsfc"/>`,
		"fallback": "hugeicons:calendar-minus-02",
	});
}

export default Component;
