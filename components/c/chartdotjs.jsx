import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw65b8bpj.css';
import '../../css/n/n1agmhbve.css';
import '../../css/j/jmlz6ybsa.css';
import '../../css/u/utx684bng.css';

const viewBox = {"width":256,"height":296};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw65b8bpj"/><path class="n1agmhbve"/><path class="jmlz6ybsa"/><path class="utx684bng"/>`,
		"fallback": "thesvg-color:chartdotjs",
	});
}

export default Component;
