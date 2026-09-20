import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ou3dncbcc.css';
import '../../css/o/o4oa87bts.css';
import '../../css/q/q7zk0il4z.css';
import '../../css/c/cv-q4dbhx.css';
import '../../css/a/ar9nyzj-q.css';
import '../../css/b/b8_pm-bog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ou3dncbcc"/><path class="o4oa87bts"/><path class="q7zk0il4z"/><path class="cv-q4dbhx"/><path class="ar9nyzj-q"/><path class="b8_pm-bog"/></g>`,
		"fallback": "tabler:brand-openai",
	});
}

export default Component;
