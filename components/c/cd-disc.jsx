import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m_dn-5bgg.css';
import '../../css/i/i06p4_b4q.css';
import '../../css/p/pxt9w6gls.css';
import '../../css/g/gflirmbze.css';
import '../../css/x/xjpsjs4db.css';
import '../../css/v/vo_bpkbcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m_dn-5bgg"/><path class="i06p4_b4q"/><path class="pxt9w6gls"/><path class="gflirmbze"/><path class="xjpsjs4db"/><path class="vo_bpkbcr"/></g>`,
		"fallback": "streamline-freehand-color:cd-disc",
	});
}

export default Component;
