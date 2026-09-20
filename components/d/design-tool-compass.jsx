import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z4dzdqz2i.css';
import '../../css/b/bqlg_qjwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z4dzdqz2i"/><path class="bqlg_qjwe"/></g>`,
		"fallback": "streamline-ultimate:design-tool-compass",
	});
}

export default Component;
