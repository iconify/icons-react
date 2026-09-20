import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/e/efper0b_o.css';
import '../../css/l/l87812muk.css';
import '../../css/w/wcybux_3z.css';
import '../../css/a/abcwoxbsm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="efper0b_o"/><path class="l87812muk"/></g><path class="wcybux_3z"/><path class="abcwoxbsm"/></g>`,
		"fallback": "pepicons-print:down-left",
	});
}

export default Component;
