import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b7uiutj7l.css';
import '../../css/g/ge1gmcosn.css';
import '../../css/s/sahyc_b7a.css';
import '../../css/h/hhq7drbfr.css';
import '../../css/a/auhmw8b2i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b7uiutj7l"/><path class="ge1gmcosn"/><path class="sahyc_b7a"/><path class="hhq7drbfr"/><path class="auhmw8b2i"/></g>`,
		"fallback": "streamline-color:database",
	});
}

export default Component;
