import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xwdwrlbgn.css';
import '../../css/y/ybnwjcooy.css';
import '../../css/f/fg0e7sbfc.css';
import '../../css/y/yaqh7szcu.css';
import '../../css/z/z7oqtpbjj.css';
import '../../css/o/ofts92-xf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xwdwrlbgn"/><path class="ybnwjcooy"/><path class="fg0e7sbfc"/><path class="yaqh7szcu"/><path class="z7oqtpbjj"/><path class="ofts92-xf"/></g>`,
		"fallback": "fluent-emoji-flat:alembic",
	});
}

export default Component;
