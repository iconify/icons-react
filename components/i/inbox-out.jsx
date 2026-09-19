import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x_ct48b7d.css';
import '../../css/a/awq5yzgdb.css';
import '../../css/i/i4q3uc85m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="x_ct48b7d"/><path class="awq5yzgdb"/><path class="i4q3uc85m"/></g>`,
		"fallback": "icon-park-solid:inbox-out",
	});
}

export default Component;
