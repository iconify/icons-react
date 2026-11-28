import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef7cstbbu.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k9x5ajbdu.css';
import '../../css/a/a-fj8301e.css';
import '../../css/r/rbx21knaf.css';
import '../../css/f/f-4a3gumk.css';
import '../../css/q/qgoj2cb0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef7cstbbu secondary"/><g class="dt0cm9dhy primary"><path class="k9x5ajbdu"/><circle class="a-fj8301e"/><path class="rbx21knaf"/><circle class="f-4a3gumk"/><path class="qgoj2cb0j"/></g>`,
		"fallback": "iconaut:ai-tune-duo",
	});
}

export default Component;
