import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-abn8bob.css';
import '../../css/x/xxbq7uh3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-abn8bob"/><path class="xxbq7uh3b"/>`,
		"fallback": "solar:heart-crack-bold-duotone",
	});
}

export default Component;
