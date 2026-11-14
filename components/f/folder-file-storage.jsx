import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kffm874mq.css';
import '../../css/s/szb0icc9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kffm874mq"/><path class="szb0icc9x"/></g>`,
		"fallback": "hugeicons:folder-file-storage",
	});
}

export default Component;
