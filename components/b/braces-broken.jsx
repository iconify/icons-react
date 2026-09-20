import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u29u3ubqq.css';
import '../../css/b/bws08ccji.css';
import '../../css/b/by1hc2n7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u29u3ubqq"/><path class="bws08ccji"/><path class="by1hc2n7w"/></g>`,
		"fallback": "solar:braces-broken",
	});
}

export default Component;
