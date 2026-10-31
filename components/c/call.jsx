import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gnv7fccfh.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/y/yh37zgbbk.css';
import '../../css/h/hu2sydbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gnv7fccfh"/><g class="mc2zb0bvp"><circle class="yh37zgbbk"/><path class="hu2sydbrb"/></g></g>`,
		"fallback": "struq:call",
	});
}

export default Component;
