import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dillvx__w.css';
import '../../css/l/lefsu0b6s.css';
import '../../css/a/ang3hpb4r.css';
import '../../css/q/qrwfd8ber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dillvx__w"/><path class="lefsu0b6s wm-a"/><path class="ang3hpb4r"/><path class="qrwfd8ber wm-a"/></g>`,
		"fallback": "withicons:golf-duo",
	});
}

export default Component;
