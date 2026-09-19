import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/h/hrq90hfel.css';
import '../../css/k/karhh3sue.css';
import '../../css/y/ydwm7ozks.css';
import '../../css/r/rc1-c96xu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><circle class="hrq90hfel"/><path class="karhh3sue"/><path class="ydwm7ozks"/><path class="rc1-c96xu"/></g>`,
		"fallback": "icon-park:delete-three",
	});
}

export default Component;
