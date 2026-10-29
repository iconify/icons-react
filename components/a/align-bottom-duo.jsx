import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jmihh3bxy.css';
import '../../css/v/v_ui7pbkk.css';
import '../../css/d/dqt-8mv4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jmihh3bxy wm-a"/><path class="v_ui7pbkk"/><path class="dqt-8mv4w wm-a"/></g>`,
		"fallback": "withicons:align-bottom-duo",
	});
}

export default Component;
