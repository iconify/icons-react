import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v6qwsy-jo.css';
import '../../css/p/pzipb6ixt.css';
import '../../css/g/gk74kzy9g.css';
import '../../css/o/odvyypb7e.css';
import '../../css/f/fod3o5b6g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v6qwsy-jo"/><path class="pzipb6ixt"/><path class="gk74kzy9g"/><path class="odvyypb7e"/><path class="fod3o5b6g"/></g>`,
		"fallback": "fluent-emoji-flat:artist-palette",
	});
}

export default Component;
