import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v86ahybqi.css';
import '../../css/l/lr2ylubph.css';
import '../../css/e/e2n6ltb5p.css';
import '../../css/b/ba5rxbcob.css';
import '../../css/z/zdcv29bqb.css';
import '../../css/b/bk3tzdb6d.css';
import '../../css/v/vtsnw1ixp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v86ahybqi wm-shadow"/><path class="lr2ylubph"/><path class="e2n6ltb5p"/><path class="ba5rxbcob"/><path class="zdcv29bqb"/><path class="bk3tzdb6d wm-shine"/><path class="vtsnw1ixp"/>`,
		"fallback": "withicons-plush:check",
	});
}

export default Component;
