import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sa4jm9bar.css';
import '../../css/r/r6g18ui6h.css';
import '../../css/g/g-dt7yb-t.css';
import '../../css/x/xeqhmjlyj.css';
import '../../css/a/a_vt27b6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="sa4jm9bar"/><path class="r6g18ui6h"/><path class="g-dt7yb-t"/><path class="xeqhmjlyj"/><path class="a_vt27b6g"/></g>`,
		"fallback": "thesvg:automatic1111-sd-webui",
	});
}

export default Component;
