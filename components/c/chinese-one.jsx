import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/r/r9vp1ackb.css';
import '../../css/c/caauuo1jf.css';
import '../../css/m/m_e-3cbqu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="xhdah4bbl"/><path class="r9vp1ackb"/><path class="caauuo1jf"/><path class="m_e-3cbqu"/></g>`,
		"fallback": "icon-park:chinese-one",
	});
}

export default Component;
