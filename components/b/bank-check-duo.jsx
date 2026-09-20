import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqdiazp9v.css';
import '../../css/y/yachlsbva.css';
import '../../css/i/is8hzkc1y.css';
import '../../css/l/l52eq0nbt.css';
import '../../css/t/tymp5sbgh.css';
import '../../css/o/olmg_uozs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xqdiazp9v"/><path class="yachlsbva"/><path clip-rule="evenodd" class="is8hzkc1y"/><path class="l52eq0nbt"/><path class="tymp5sbgh"/><path class="olmg_uozs"/></g>`,
		"fallback": "streamline-kameleon-color:bank-check-duo",
	});
}

export default Component;
