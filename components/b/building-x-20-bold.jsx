import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqsj93biv.css';
import '../../css/n/ncybe8mrd.css';
import '../../css/f/fk_ahtbzo.css';
import '../../css/b/b325a1bje.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqsj93biv"/><path class="ncybe8mrd"/><path class="fk_ahtbzo"/><path class="b325a1bje"/>`,
		"fallback": "energy-icons:building-x-20-bold",
	});
}

export default Component;
