import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vpw5srbkd.css';
import '../../css/t/ty_pvobpe.css';
import '../../css/s/s5ge2ufpm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="vpw5srbkd"/><path class="ty_pvobpe"/><path class="s5ge2ufpm"/></g>`,
		"fallback": "icon-park-outline:bug",
	});
}

export default Component;
