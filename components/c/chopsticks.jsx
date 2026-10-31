import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/svxyzabqy.css';
import '../../css/s/s3cotc17f.css';
import '../../css/k/k53xisyrz.css';
import '../../css/g/gel4lacck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="svxyzabqy wm-shadow"/><path class="s3cotc17f"/><path class="k53xisyrz"/><path class="gel4lacck"/></g>`,
		"fallback": "withicons-retro:chopsticks",
	});
}

export default Component;
