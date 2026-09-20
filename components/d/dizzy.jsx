import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-npbkb5y.css';
import '../../css/v/veaxd8p_f.css';
import '../../css/p/pxi613p7d.css';
import '../../css/k/k5l576qwn.css';
import '../../css/o/ocin43i-q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-npbkb5y"/><path class="veaxd8p_f"/><path class="pxi613p7d"/><path class="k5l576qwn"/><path class="ocin43i-q"/>`,
		"fallback": "streamline-emojis:dizzy",
	});
}

export default Component;
