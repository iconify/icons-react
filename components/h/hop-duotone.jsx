import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qpfud6box.css';
import '../../css/e/e8h7730wv.css';
import '../../css/g/gjg8u-1-g.css';
import '../../css/m/mvc0g5yje.css';
import '../../css/s/sip7q4xcc.css';
import '../../css/x/x79ryb5tf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qpfud6box"/><path class="e8h7730wv"/><path class="gjg8u-1-g"/><path class="mvc0g5yje"/><path class="sip7q4xcc"/><path class="x79ryb5tf"/></g>`,
		"fallback": "lucide-extended:hop-duotone",
	});
}

export default Component;
