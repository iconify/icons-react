import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1m8p11fi.css';
import '../../css/o/oa8orvb1f.css';
import '../../css/x/xg0hbcg2p.css';
import '../../css/o/osylfriqx.css';
import '../../css/p/p3fycvbnf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1m8p11fi"/><path class="oa8orvb1f"/><path class="xg0hbcg2p"/><path class="osylfriqx"/><path class="p3fycvbnf"/>`,
		"fallback": "energy-icons:control-room-20-bold",
	});
}

export default Component;
