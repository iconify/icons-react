import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/g/gn96y-boe.css';
import '../../css/g/gxln3q5ml.css';
import '../../css/f/fps1d8bnn.css';
import '../../css/c/chdsjjbjt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="xhdah4bbl"/><path class="gn96y-boe"/><path class="gxln3q5ml"/><path class="fps1d8bnn"/><path class="chdsjjbjt"/></g>`,
		"fallback": "icon-park:add-subtract",
	});
}

export default Component;
