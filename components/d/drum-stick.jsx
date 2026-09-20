import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/mbc0o4byy.css';
import '../../css/j/jf-djzbhp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="mbc0o4byy"/><path class="jf-djzbhp"/></g>`,
		"fallback": "streamline-plump:drum-stick",
	});
}

export default Component;
