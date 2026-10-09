import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhtjdabbs.css';
import '../../css/o/o1i6lab6q.css';
import '../../css/d/dapkamb6l.css';
import '../../css/x/xh94e4byo.css';
import '../../css/w/wkr3_hv0f.css';
import '../../css/i/ihmii9b0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhtjdabbs"/><path class="o1i6lab6q"/><path class="dapkamb6l"/><path class="xh94e4byo"/><path class="wkr3_hv0f"/><path class="ihmii9b0s"/>`,
		"fallback": "energy-icons:balcony-solar-48-bold",
	});
}

export default Component;
