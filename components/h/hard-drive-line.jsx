import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvr3rbc2o.css';
import '../../css/a/af73r7bby.css';
import '../../css/q/qzzl_8dsx.css';
import '../../css/z/zvqclrbzw.css';
import '../../css/a/ai0xkyb7w.css';
import '../../css/s/scti-6bce.css';
import '../../css/l/l_-eu-mih.css';
import '../../css/r/rsth83_rt.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 hvr3rbc2o"/><circle class="af73r7bby clr-i-outline clr-i-outline-path-2"/><circle class="clr-i-outline clr-i-outline-path-3 qzzl_8dsx"/><circle class="clr-i-outline clr-i-outline-path-4 zvqclrbzw"/><circle class="ai0xkyb7w clr-i-outline clr-i-outline-path-5"/><path class="clr-i-outline clr-i-outline-path-6 scti-6bce"/><path class="clr-i-outline clr-i-outline-path-7 l_-eu-mih"/><path class="clr-i-outline clr-i-outline-path-8 rsth83_rt"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:hard-drive-line",
	});
}

export default Component;
