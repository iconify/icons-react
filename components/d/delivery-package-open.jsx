import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/b1jbhlt8a.css';
import '../../css/h/hpit20bvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="b1jbhlt8a"/><path class="hpit20bvl"/></g>`,
		"fallback": "streamline-cyber:delivery-package-open",
	});
}

export default Component;
