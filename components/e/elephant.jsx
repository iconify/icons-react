import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/x/xl6xlq5gj.css';
import '../../css/u/u8k_9z68o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="xl6xlq5gj"/><path class="u8k_9z68o"/></g>`,
		"fallback": "streamline-cyber:elephant",
	});
}

export default Component;
