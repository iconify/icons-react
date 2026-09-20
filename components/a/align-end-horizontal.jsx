import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tj6ubqbhj.css';
import '../../css/n/nfu1r0bhd.css';
import '../../css/c/czeiw6b4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="tj6ubqbhj"/><rect class="nfu1r0bhd"/><path class="czeiw6b4w"/></g>`,
		"fallback": "lucide:align-end-horizontal",
	});
}

export default Component;
