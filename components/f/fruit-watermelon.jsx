import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bdpj-bprc.css';
import '../../css/b/bokv6tbgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bdpj-bprc"/><path class="bokv6tbgn"/></g>`,
		"fallback": "streamline-ultimate:fruit-watermelon",
	});
}

export default Component;
