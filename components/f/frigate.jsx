import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vtns3vj0e.css';
import '../../css/g/g1ffjqbjy.css';
import '../../css/u/u1kiawb9q.css';
import '../../css/v/v857jg0zy.css';
import '../../css/r/r9teasbvf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="vtns3vj0e"/><path class="g1ffjqbjy"/><path class="u1kiawb9q"/><path class="v857jg0zy"/><path class="r9teasbvf"/></g>`,
		"fallback": "icon-park:frigate",
	});
}

export default Component;
