import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/iv63f0bdx.css';
import '../../css/h/he7_nbbdh.css';
import '../../css/z/z_amcpmpe.css';
import '../../css/g/g_rss-mdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="iv63f0bdx wm-k"/><path class="he7_nbbdh wm-a"/><path class="wm-k z_amcpmpe"/><path class="g_rss-mdm wm-a"/></g>`,
		"fallback": "withicons:case-sensitive-sketch",
	});
}

export default Component;
