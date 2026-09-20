import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uaznomhfo.css';
import '../../css/c/ch2j480nf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uaznomhfo"/><path class="ch2j480nf"/></g>`,
		"fallback": "reicon:card-receive3",
	});
}

export default Component;
