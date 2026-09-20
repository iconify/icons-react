import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/x/xno80eb-s.css';
import '../../css/a/a6qb4wb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="xno80eb-s"/><path class="a6qb4wb3u"/></g>`,
		"fallback": "streamline-cyber:beaker-test-tube",
	});
}

export default Component;
