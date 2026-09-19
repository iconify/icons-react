import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r07gb5b7z.css';
import '../../css/k/kev4430ki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r07gb5b7z"/><path class="kev4430ki"/>`,
		"fallback": "bx:bx-checkbox-minus",
	});
}

export default Component;
