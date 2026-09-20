import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/s/sloideb6m.css';
import '../../css/t/tlw2j3bce.css';
import '../../css/d/d9990mo1a.css';
import '../../css/c/cc3hlpb5m.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="sloideb6m"/><path class="tlw2j3bce"/><path class="d9990mo1a"/><path class="cc3hlpb5m"/></g>`,
		"fallback": "skill-icons:hibernate-dark",
	});
}

export default Component;
