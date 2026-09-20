import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/liqo5ubke.css';
import '../../css/u/utcq9zlzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="liqo5ubke"/><path class="utcq9zlzy"/></g>`,
		"fallback": "streamline-cyber:highlighter",
	});
}

export default Component;
