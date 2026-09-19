import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/y/yyj025b3q.css';
import '../../css/u/utds89bah.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="yyj025b3q"/><path class="utds89bah"/></g>`,
		"fallback": "icon-park:bookmark-one",
	});
}

export default Component;
