import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/q/qdk9bsj1m.css';
import '../../css/t/tjzrtobbx.css';
import '../../css/g/gz12--zax.css';
import '../../css/q/qloewrbaq.css';
import '../../css/l/lrepm4sfl.css';
import '../../css/m/maejv3bjx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="qdk9bsj1m"/><path class="tjzrtobbx"/><path class="gz12--zax"/></g><path class="qloewrbaq"/><path class="lrepm4sfl"/><path class="maejv3bjx"/></g>`,
		"fallback": "pepicons-print:dollar",
	});
}

export default Component;
