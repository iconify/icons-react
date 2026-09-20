import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ov163mcoa.css';
import '../../css/p/ppyq7abdk.css';
import '../../css/i/iz57_fuab.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ov163mcoa"/><path class="ppyq7abdk"/><path class="iz57_fuab"/></g>`,
		"fallback": "streamline-kameleon-color:chalkboard-duo",
	});
}

export default Component;
