import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/x/xp2wd6b7o.css';
import '../../css/t/ti79v0bxi.css';
import '../../css/h/hqsxmzcag.css';
import '../../css/a/afqh91xni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="xp2wd6b7o"/><path class="ti79v0bxi"/></g><path class="hqsxmzcag"/><path class="afqh91xni"/>`,
		"fallback": "solar:chevrons-down-up-bold-duotone",
	});
}

export default Component;
