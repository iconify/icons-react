import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lryqxpxss.css';
import '../../css/a/agh6zbcqy.css';
import '../../css/t/t0fn44bab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lryqxpxss"/><path class="agh6zbcqy"/><path class="t0fn44bab"/></g>`,
		"fallback": "streamline-ultimate:go-pro",
	});
}

export default Component;
