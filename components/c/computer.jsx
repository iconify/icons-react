import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q35v8bcra.css';
import '../../css/u/uwkdhxwda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="q35v8bcra"/><path class="uwkdhxwda"/></g>`,
		"fallback": "proicons:computer",
	});
}

export default Component;
