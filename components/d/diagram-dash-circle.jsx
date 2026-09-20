import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmo9ppb1i.css';
import '../../css/a/ayf1yibsl.css';
import '../../css/g/g00e2i2sx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lmo9ppb1i"><path class="ayf1yibsl"/><path class="g00e2i2sx"/></g>`,
		"fallback": "streamline-ultimate-color:diagram-dash-circle",
	});
}

export default Component;
