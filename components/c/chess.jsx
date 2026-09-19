import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyisdvg4m.css';
import '../../css/i/il_8vobti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyisdvg4m"/><path class="il_8vobti"/>`,
		"fallback": "boxicons:chess",
	});
}

export default Component;
