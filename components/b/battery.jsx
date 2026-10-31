import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e8mb1rodb.css';
import '../../css/k/kkh1qgbpq.css';
import '../../css/w/wv9-mub2o.css';
import '../../css/k/k9sixyvpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="e8mb1rodb wm-shadow"/><path class="kkh1qgbpq"/><path class="wv9-mub2o"/><path class="k9sixyvpw"/></g>`,
		"fallback": "withicons-retro:battery",
	});
}

export default Component;
