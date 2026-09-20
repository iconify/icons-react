import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e65otkb-a.css';
import '../../css/g/glbd4gcqi.css';
import '../../css/m/me78i_0yg.css';
import '../../css/g/g0ayah46a.css';
import '../../css/g/g5d6z9bnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e65otkb-a"/><path class="glbd4gcqi"/><path class="me78i_0yg"/><path class="g0ayah46a"/><path class="g5d6z9bnx"/>`,
		"fallback": "token:fluid",
	});
}

export default Component;
