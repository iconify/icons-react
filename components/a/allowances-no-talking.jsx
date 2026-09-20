import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k067-5ohl.css';
import '../../css/m/ml3jldfki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k067-5ohl"/><path class="ml3jldfki"/></g>`,
		"fallback": "streamline-ultimate:allowances-no-talking",
	});
}

export default Component;
