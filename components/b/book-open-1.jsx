import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/nurdyx6uz.css';
import '../../css/j/jqwy-muvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="nurdyx6uz"/><path class="jqwy-muvg"/></g>`,
		"fallback": "streamline-cyber:book-open-1",
	});
}

export default Component;
