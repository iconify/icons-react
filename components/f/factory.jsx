import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/fyw4ahbtf.css';
import '../../css/g/gx5gh318l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="fyw4ahbtf"/><path class="gx5gh318l"/></g>`,
		"fallback": "streamline-cyber:factory",
	});
}

export default Component;
