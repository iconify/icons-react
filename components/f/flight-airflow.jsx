import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/q/qa3-8i7to.css';
import '../../css/k/konjrdb7w.css';
import '../../css/z/zfy9cb6vk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="qa3-8i7to"/><path class="konjrdb7w"/><path class="zfy9cb6vk"/></g>`,
		"fallback": "icon-park-outline:flight-airflow",
	});
}

export default Component;
