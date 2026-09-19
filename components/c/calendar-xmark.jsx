import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgeig3s5j.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgeig3s5j"/>`,
		"fallback": "fa7-regular:calendar-xmark",
	});
}

export default Component;
