import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxq6qwowc.css';
import '../../css/z/zqsh72_3k.css';
import '../../css/f/f424ifnkp.css';
import '../../css/w/wwr-ntbcq.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged zxq6qwowc"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged zqsh72_3k"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged f424ifnkp"/><path class="clr-i-outline--badged clr-i-outline-path-4--badged wwr-ntbcq"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-5--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:computer-outline-badged",
	});
}

export default Component;
