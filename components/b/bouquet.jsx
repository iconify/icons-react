import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k26aysb7a.css';
import '../../css/o/o59b9dj0n.css';
import '../../css/y/yt4x9ybzb.css';
import '../../css/y/yg5-xubab.css';
import '../../css/b/bve_mtedx.css';
import '../../css/h/h121ztn6m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k26aysb7a"/><path class="o59b9dj0n"/><path class="yt4x9ybzb"/><path class="yg5-xubab"/><path class="bve_mtedx"/><path class="h121ztn6m"/></g>`,
		"fallback": "fluent-emoji-flat:bouquet",
	});
}

export default Component;
