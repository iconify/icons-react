import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/vcir9ebrj.css';
import '../../css/j/ju4d0lblh.css';
import '../../css/c/civfl11di.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="vcir9ebrj"/><path class="ju4d0lblh"/><path class="civfl11di"/></g>`,
		"fallback": "marketeq:gold-medal",
	});
}

export default Component;
