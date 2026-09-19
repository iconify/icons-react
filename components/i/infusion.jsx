import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/ilqokebqe.css';
import '../../css/b/buzi5ibmp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ilqokebqe"/><path class="buzi5ibmp"/></g>`,
		"fallback": "icon-park-outline:infusion",
	});
}

export default Component;
