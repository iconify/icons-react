import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/b/bn5ilqppl.css';
import '../../css/p/ppzqy-bxa.css';
import '../../css/o/ouxzqo9mb.css';
import '../../css/d/dfqro5y3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="bn5ilqppl"/><circle class="ppzqy-bxa"/><circle class="ouxzqo9mb"/><path class="dfqro5y3h"/></g>`,
		"fallback": "majesticons:git-fork",
	});
}

export default Component;
