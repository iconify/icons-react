import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxacygbth.css';
import '../../css/q/q1fgbwbpc.css';
import '../../css/p/ptx44gb2l.css';
import '../../css/z/z1-bvrm2h.css';
import '../../css/g/gduug3k_h.css';
import '../../css/p/pn7lc9bpe.css';
import '../../css/c/cdz259bwl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxacygbth"/><path class="q1fgbwbpc"/><path class="ptx44gb2l"/><path class="z1-bvrm2h"/><path class="gduug3k_h"/><path class="pn7lc9bpe"/><path class="cdz259bwl"/>`,
		"fallback": "streamline-emojis:cat",
	});
}

export default Component;
