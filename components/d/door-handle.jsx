import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/eme4c3hbl.css';
import '../../css/b/bdchsn1ab.css';
import '../../css/j/jw5oknbfl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="eme4c3hbl"/><path class="bdchsn1ab"/><path class="jw5oknbfl"/></g>`,
		"fallback": "icon-park:door-handle",
	});
}

export default Component;
