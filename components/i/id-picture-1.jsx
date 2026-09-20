import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/htz74t92u.css';
import '../../css/a/au6sz-bex.css';
import '../../css/b/bdbkw7e2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="htz74t92u"/><path class="au6sz-bex"/><path class="bdbkw7e2c"/></g>`,
		"fallback": "streamline-cyber:id-picture-1",
	});
}

export default Component;
