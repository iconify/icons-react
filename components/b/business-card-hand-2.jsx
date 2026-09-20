import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eeti5hbwe.css';
import '../../css/s/scf896bnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eeti5hbwe"/><path class="scf896bnp"/></g>`,
		"fallback": "streamline-ultimate:business-card-hand-2",
	});
}

export default Component;
