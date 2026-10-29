import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jaline93j.css';
import '../../css/n/nyqj-4wfl.css';
import '../../css/d/dxfilmbdx.css';
import '../../css/a/a4vjoxyvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jaline93j wm-k"/><path class="nyqj-4wfl wm-shadow"/><path class="dxfilmbdx wm-k"/><path class="a4vjoxyvs wm-a"/></g>`,
		"fallback": "withicons:candy-corn-engrave",
	});
}

export default Component;
