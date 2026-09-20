import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uf3b7mtry.css';
import '../../css/g/glrisgric.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uf3b7mtry"/><path class="glrisgric"/></g>`,
		"fallback": "streamline-ultimate:gender-hetero",
	});
}

export default Component;
