import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/g/gy_pqzw6t.css';
import '../../css/t/tm-y6ci7n.css';
import '../../css/c/cv5fzhbbu.css';
import '../../css/j/jri3mq8hx.css';
import '../../css/e/ehufd1sdo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="gy_pqzw6t"/><path class="tm-y6ci7n"/><path class="cv5fzhbbu"/><path class="jri3mq8hx"/><path class="ehufd1sdo"/></g>`,
		"fallback": "icon-park:copy-one",
	});
}

export default Component;
