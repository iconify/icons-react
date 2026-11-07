import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg9kmqbyf.css';
import '../../css/a/aybm1m1ha.css';
import '../../css/m/mldoj823a.css';
import '../../css/l/lbot12b7s.css';
import '../../css/x/xxk_-obsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eg9kmqbyf"/><path class="aybm1m1ha"/><path class="mldoj823a"/><path class="lbot12b7s"/><path class="xxk_-obsb"/>`,
		"fallback": "solar:basketball-bold",
	});
}

export default Component;
