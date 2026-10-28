import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/g/gr6dxfb2l.css';
import '../../css/j/jswongbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="gr6dxfb2l"/><path class="jswongbit"/></g>`,
		"fallback": "codex:calendar",
	});
}

export default Component;
