import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/g/g01bmcbzw.css';
import '../../css/z/zwtfweozy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="g01bmcbzw"/><path class="zwtfweozy"/></g>`,
		"fallback": "streamline-plump:dark-dislay-mode",
	});
}

export default Component;
