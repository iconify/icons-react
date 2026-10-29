import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nufdozswc.css';
import '../../css/w/wxl256sll.css';
import '../../css/d/d362vvb3s.css';
import '../../css/b/bp9cujbno.css';
import '../../css/h/h89yotbkz.css';
import '../../css/m/m91saewcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nufdozswc wm-shadow"/><path class="wm-k wxl256sll"/><path class="d362vvb3s wm-k"/><path class="bp9cujbno wm-k"/><path class="h89yotbkz wm-k"/><path class="m91saewcq wm-shine"/>`,
		"fallback": "withicons-pastel:grip-horizontal",
	});
}

export default Component;
