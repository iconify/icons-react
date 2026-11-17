import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/x3z6ypblj.css';
import '../../css/j/jqbgtl3yn.css';
import '../../css/l/lns-4nbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="x3z6ypblj"/><path class="jqbgtl3yn"/><path class="lns-4nbyt"/></g>`,
		"fallback": "matita:captions",
	});
}

export default Component;
