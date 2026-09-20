import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/t/t_q76ccex.css';
import '../../css/a/asqjyzb2j.css';
import '../../css/e/egqzfzbkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="t_q76ccex"/><path class="asqjyzb2j"/><path class="egqzfzbkq"/></g>`,
		"fallback": "streamline-cyber:group",
	});
}

export default Component;
