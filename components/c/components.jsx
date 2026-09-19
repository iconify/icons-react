import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/a/a32apgb_s.css';
import '../../css/h/htubz2biz.css';
import '../../css/o/okw__sobm.css';
import '../../css/h/h45--h21m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="a32apgb_s"/><path class="htubz2biz"/><path class="okw__sobm"/><path class="h45--h21m"/></g>`,
		"fallback": "icon-park:components",
	});
}

export default Component;
