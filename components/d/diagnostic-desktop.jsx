import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rw1my-btz.css';
import '../../css/z/z61kbgi8p.css';
import '../../css/b/bgjf4cbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rw1my-btz"/><path class="z61kbgi8p"/><path class="bgjf4cbzr"/></g>`,
		"fallback": "streamline-ultimate:diagnostic-desktop",
	});
}

export default Component;
