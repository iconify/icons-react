import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ann80wu5h.css';
import '../../css/b/b8oyz2b-k.css';
import '../../css/f/fllxh0mbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ann80wu5h"/><rect transform="rotate(180 19.75 16.25)" class="b8oyz2b-k"/><rect transform="rotate(180 10.25 21.25)" class="fllxh0mbn"/></g>`,
		"fallback": "proicons:align-top",
	});
}

export default Component;
