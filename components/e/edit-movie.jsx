import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/smq2sc66t.css';
import '../../css/a/aq8sebb3g.css';
import '../../css/m/m9ih-22dw.css';
import '../../css/x/x1w8_4cqz.css';
import '../../css/s/sz7401bni.css';
import '../../css/g/gs3e4lo3o.css';
import '../../css/z/zhfi13zpu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="smq2sc66t"/><path class="aq8sebb3g"/><path class="m9ih-22dw"/><path class="x1w8_4cqz"/><path class="sz7401bni"/><path class="gs3e4lo3o"/><path class="zhfi13zpu"/></g>`,
		"fallback": "icon-park:edit-movie",
	});
}

export default Component;
