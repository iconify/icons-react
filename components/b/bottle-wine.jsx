import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q69jk0g5n.css';
import '../../css/a/admyoqppj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q69jk0g5n"/><path class="admyoqppj"/></g>`,
		"fallback": "hugeicons:bottle-wine",
	});
}

export default Component;
