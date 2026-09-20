import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0m72u3lk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0m72u3lk"/>`,
		"fallback": "tabler:alphabet-runes",
	});
}

export default Component;
