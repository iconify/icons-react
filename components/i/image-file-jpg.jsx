import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j9yaa7bji.css';
import '../../css/l/lyivv0-5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j9yaa7bji"/><path class="lyivv0-5g"/></g>`,
		"fallback": "streamline-ultimate:image-file-jpg",
	});
}

export default Component;
