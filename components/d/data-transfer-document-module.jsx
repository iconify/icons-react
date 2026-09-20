import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ut32syxaf.css';
import '../../css/c/cxps0jbdc.css';
import '../../css/x/xncpgacks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ut32syxaf"/><path class="cxps0jbdc"/><path class="xncpgacks"/></g>`,
		"fallback": "streamline-freehand-color:data-transfer-document-module",
	});
}

export default Component;
