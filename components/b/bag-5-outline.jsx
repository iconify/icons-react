import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g26s6eb5h.css';
import '../../css/z/zwlaz0b-f.css';
import '../../css/q/q3o58pbau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g26s6eb5h"/><path class="zwlaz0b-f"/><path clip-rule="evenodd" class="q3o58pbau"/>`,
		"fallback": "solar:bag-5-outline",
	});
}

export default Component;
