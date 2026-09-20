import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eu2tv-bak.css';
import '../../css/a/a96ba9-sk.css';
import '../../css/j/jwjvb1bpj.css';
import '../../css/c/c6t3c-ate.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eu2tv-bak"/><path class="a96ba9-sk"/><path class="jwjvb1bpj"/><path class="c6t3c-ate"/></g>`,
		"fallback": "streamline-ultimate:earth-refresh",
	});
}

export default Component;
