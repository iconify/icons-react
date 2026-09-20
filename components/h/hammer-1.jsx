import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/cd1cl3hgf.css';
import '../../css/u/utbwnibbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="cd1cl3hgf"/><path class="utbwnibbl"/></g>`,
		"fallback": "streamline-cyber:hammer-1",
	});
}

export default Component;
