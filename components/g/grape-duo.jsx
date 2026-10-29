import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z8rknehdi.css';
import '../../css/z/zv1ng1bfo.css';
import '../../css/w/wabha5b6m.css';
import '../../css/i/iyduq7-od.css';
import '../../css/x/x2f5ebbeb.css';
import '../../css/l/lhyb3bbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z8rknehdi"/><path class="zv1ng1bfo"/><path class="wabha5b6m"/><path class="iyduq7-od wm-a"/><path class="wm-a x2f5ebbeb"/><path class="lhyb3bbbn"/></g>`,
		"fallback": "withicons:grape-duo",
	});
}

export default Component;
