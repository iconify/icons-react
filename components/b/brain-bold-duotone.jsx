import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/q8__mwyec.css';
import '../../css/x/xufqh5b1e.css';
import '../../css/m/mkldlgbmq.css';
import '../../css/j/ja6888b4r.css';
import '../../css/e/ev43qtbhu.css';
import '../../css/a/at0hqrb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="q8__mwyec"/><path class="xufqh5b1e"/></g><path class="mkldlgbmq"/><path class="ja6888b4r"/><path class="ev43qtbhu"/><path class="at0hqrb-n"/>`,
		"fallback": "solar:brain-bold-duotone",
	});
}

export default Component;
