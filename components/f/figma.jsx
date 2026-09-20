import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ol0t8lsgs.css';
import '../../css/j/jn6co3b1a.css';
import '../../css/b/bp4vue9ec.css';
import '../../css/s/ssz5_4b6y.css';
import '../../css/g/gzovnvbwc.css';
import '../../css/s/sboouioqz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ol0t8lsgs"/><path class="jn6co3b1a"/><path class="bp4vue9ec"/><path class="ssz5_4b6y"/><path class="gzovnvbwc"/><path class="sboouioqz"/></g>`,
		"fallback": "streamline-color:figma",
	});
}

export default Component;
