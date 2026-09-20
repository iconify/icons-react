import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/a/atvg2-b6z.css';
import '../../css/a/a5as_vbii.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="atvg2-b6z"/><path class="a5as_vbii"/></g>`,
		"fallback": "streamline-plump:description",
	});
}

export default Component;
