import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/e/ekx5plb0h.css';
import '../../css/p/pt65lxf3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ekx5plb0h"/><path class="pt65lxf3h"/></g>`,
		"fallback": "streamline-cyber:email-2",
	});
}

export default Component;
