import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_z7y2z9p.css';
import '../../css/j/jseh88bsl.css';
import '../../css/v/v58yjbcsq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_z7y2z9p"/><path class="jseh88bsl"/><path class="v58yjbcsq"/>`,
		"fallback": "fxemoji:greatbritainflag",
	});
}

export default Component;
