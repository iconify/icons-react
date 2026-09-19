import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gshe_di8n.css';
import '../../css/q/q3p31cclv.css';
import '../../css/e/ep2h7ebfd.css';
import '../../css/c/cwap3db_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gshe_di8n"/><path class="q3p31cclv"/><path class="ep2h7ebfd"/><path class="cwap3db_g"/>`,
		"fallback": "fontisto:dizzy",
	});
}

export default Component;
