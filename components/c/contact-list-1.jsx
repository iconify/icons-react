import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/laorzxbjd.css';
import '../../css/f/fj21vrbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="laorzxbjd"/><path class="fj21vrbos"/></g>`,
		"fallback": "streamline-cyber:contact-list-1",
	});
}

export default Component;
