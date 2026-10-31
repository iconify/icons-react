import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/okuzz3tjw.css';
import '../../css/k/kkjdlbmqh.css';
import '../../css/o/owgnbuomu.css';
import '../../css/z/zc2m5bbql.css';
import '../../css/d/d4rt0lb-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="okuzz3tjw"/><path class="kkjdlbmqh"/><path class="owgnbuomu wm-shine"/><path class="wm-k zc2m5bbql"/><path class="d4rt0lb-l wm-a"/></g>`,
		"fallback": "withicons-kawaii:crosshair",
	});
}

export default Component;
