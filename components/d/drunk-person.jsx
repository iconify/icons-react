import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuabs9bci.css';
import '../../css/i/izvmikgnc.css';
import '../../css/x/x4u8pbwjc.css';
import '../../css/c/cxufa9tva.css';
import '../../css/u/uf0tfijap.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/n/nlt7fuc1e.css';
import '../../css/p/ppp2tzozd.css';
import '../../css/k/kriw1qb9s.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuabs9bci"/><path class="izvmikgnc"/><g class="x4u8pbwjc"><path class="cxufa9tva"/><circle class="uf0tfijap"/></g><g class="brzn_0bpr"><circle class="nlt7fuc1e"/><path class="ppp2tzozd"/><path class="kriw1qb9s"/></g>`,
		"fallback": "openmoji:drunk-person",
	});
}

export default Component;
