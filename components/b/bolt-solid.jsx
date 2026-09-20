import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9un138cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9un138cc"/>`,
		"fallback": "pixel:bolt-solid",
	});
}

export default Component;
