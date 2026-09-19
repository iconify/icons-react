import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/q/q8fynub3l.css';
import '../../css/d/d69g7vb5s.css';
import '../../css/u/uqq7glb-f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="q8fynub3l"/><path class="d69g7vb5s"/><path class="uqq7glb-f"/></g>`,
		"fallback": "icon-park:grinning-face-with-open-mouth",
	});
}

export default Component;
