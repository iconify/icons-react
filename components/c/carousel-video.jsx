import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/g/gxkz_mv5m.css';
import '../../css/c/crtku50gp.css';
import '../../css/v/vsyouvb5i.css';
import '../../css/v/vq3rsgb0h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="gxkz_mv5m"/><rect class="crtku50gp"/><rect class="vsyouvb5i"/><path class="vq3rsgb0h"/></g>`,
		"fallback": "icon-park:carousel-video",
	});
}

export default Component;
