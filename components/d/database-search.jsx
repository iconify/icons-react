import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b-tcbxbyv.css';
import '../../css/l/l4ex_ybmo.css';
import '../../css/e/ez1x61b2a.css';
import '../../css/t/tj6aivbzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b-tcbxbyv"/><path class="l4ex_ybmo"/><circle class="ez1x61b2a"/><ellipse class="tj6aivbzl"/></g>`,
		"fallback": "lucide:database-search",
	});
}

export default Component;
