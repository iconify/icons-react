import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc_hokbxm.css';
import '../../css/t/tknqpubcv.css';
import '../../css/l/laiohca0l.css';
import '../../css/f/fvzn7jbwv.css';
import '../../css/o/ovw8h7b-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc_hokbxm"/><path class="tknqpubcv"/><path class="laiohca0l"/><path class="fvzn7jbwv"/><path class="ovw8h7b-w"/>`,
		"fallback": "mage:broadcast-fill",
	});
}

export default Component;
