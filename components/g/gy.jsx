import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekcncrbve.css';
import '../../css/x/xwy5_pu0t.css';
import '../../css/z/zshncqbqu.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ekcncrbve"/><path class="xwy5_pu0t"/><path class="zshncqbqu"/></g>`,
		"fallback": "flagpack:gy",
	});
}

export default Component;
