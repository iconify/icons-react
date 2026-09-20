import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qjx8d1knt.css';
import '../../css/q/qqloxac7x.css';
import '../../css/t/th2yn--nv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qjx8d1knt"/><path class="qqloxac7x"/><path class="th2yn--nv"/></g>`,
		"fallback": "streamline-ultimate:desktop-monitor-smiley",
	});
}

export default Component;
