import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zoqu5x3aw.css';
import '../../css/d/d827kub-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zoqu5x3aw"/><path class="d827kub-d"/></g>`,
		"fallback": "streamline-ultimate:hbo-logo",
	});
}

export default Component;
