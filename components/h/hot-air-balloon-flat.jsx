import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y6s-iccgj.css';
import '../../css/u/ut17npbmw.css';
import '../../css/s/sw-657gek.css';
import '../../css/b/b80muqbhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y6s-iccgj"/><path class="ut17npbmw"/><path clip-rule="evenodd" class="sw-657gek"/><path clip-rule="evenodd" class="b80muqbhv"/></g>`,
		"fallback": "streamline-sharp-color:hot-air-balloon-flat",
	});
}

export default Component;
