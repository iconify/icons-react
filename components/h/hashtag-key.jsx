import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/z/z6vsw_bbp.css';
import '../../css/x/x0vrx2mbt.css';
import '../../css/q/q9euir7pf.css';
import '../../css/u/umo0npbcb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="xhdah4bbl"/><path class="z6vsw_bbp"/><path class="x0vrx2mbt"/><path class="q9euir7pf"/><path class="umo0npbcb"/></g>`,
		"fallback": "icon-park:hashtag-key",
	});
}

export default Component;
