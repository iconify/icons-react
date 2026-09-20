import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/o/o15f5z9-q.css';
import '../../css/j/jja9ehb0t.css';
import '../../css/g/gwj6-nrca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="o15f5z9-q"/><path class="jja9ehb0t"/><path class="gwj6-nrca"/></g>`,
		"fallback": "streamline-cyber:hourglass-2",
	});
}

export default Component;
