import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-fhbk.css';
import '../../css/q/qa-o7h.css';
import '../../css/a/ab0nvj.css';
import '../../css/s/so-from-64.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-fhbk qa-o7h"/><path class="ab0nvj qa-o7h"/>`,
		"fallback": "line-md:document",
	});
}

export default Component;
