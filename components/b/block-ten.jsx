import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/m/mq_8hme5m.css';
import '../../css/e/exyaah_ct.css';
import '../../css/u/u7n8m5eef.css';
import '../../css/f/f6mf1yb9b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="mq_8hme5m"/><path class="mq_8hme5m"/><path class="exyaah_ct"/><path class="u7n8m5eef"/><path class="f6mf1yb9b"/></g>`,
		"fallback": "icon-park:block-ten",
	});
}

export default Component;
