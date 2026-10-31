import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/c/cil7cgb9w.css';
import '../../css/v/v8vgj3qim.css';
import '../../css/h/hodb5cbnl.css';
import '../../css/g/gxi8who9z.css';
import '../../css/p/ph0i70bfl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path class="cil7cgb9w"/><path class="v8vgj3qim"/><path class="hodb5cbnl"/><path class="gxi8who9z"/><path class="ph0i70bfl"/></g>`,
		"fallback": "streamline-kameleon-color:box-trolley-pop",
	});
}

export default Component;
