import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2z29zb9a.css';
import '../../css/z/zylob-b1v.css';
import '../../css/m/m_g9cerbk.css';
import '../../css/m/m0gubtb5o.css';
import '../../css/b/brnj5ubbo.css';
import '../../css/j/jkpms2b3a.css';
import '../../css/n/nmv-rksiu.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="a2z29zb9a"/><path class="zylob-b1v"/><path class="m_g9cerbk"/><path class="m0gubtb5o"/><path class="brnj5ubbo"/><path class="jkpms2b3a"/><path class="nmv-rksiu"/>`,
		"fallback": "flat-ui:clocks",
	});
}

export default Component;
