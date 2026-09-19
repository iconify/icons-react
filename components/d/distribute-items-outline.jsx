import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d52dsnbbn.css';
import '../../css/b/b5_1k9b2j.css';
import '../../css/o/oncze6bod.css';
import '../../css/y/ykq52ubxq.css';
import '../../css/m/mgi0klb3l.css';
import '../../css/a/ao8ud4bvo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d52dsnbbn"/><path clip-rule="evenodd" class="b5_1k9b2j"/><path class="oncze6bod"/><path class="ykq52ubxq"/><path clip-rule="evenodd" class="mgi0klb3l"/><path class="ao8ud4bvo"/></g>`,
		"fallback": "glyphs:distribute-items-outline",
	});
}

export default Component;
