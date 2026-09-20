import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/t/trvptyb9c.css';
import '../../css/g/gpt7hssnu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="trvptyb9c"/><path class="gpt7hssnu"/></g>`,
		"fallback": "streamline-plump:image-saturation",
	});
}

export default Component;
