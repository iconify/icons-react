import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/u/utoaypbgw.css';
import '../../css/j/jde3sccsw.css';
import '../../css/e/enjpuw_xz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="utoaypbgw"/><path class="jde3sccsw"/><circle class="enjpuw_xz"/></g>`,
		"fallback": "icon-park:audio-file",
	});
}

export default Component;
