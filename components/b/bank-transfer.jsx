import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/j/ja6m_0bgn.css';
import '../../css/r/r0scfsbyv.css';
import '../../css/s/s3emfib-q.css';
import '../../css/d/drqq1676y.css';
import '../../css/z/zct9kubqg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="ja6m_0bgn"/><path class="r0scfsbyv"/><path class="s3emfib-q"/><path class="drqq1676y"/><path class="zct9kubqg"/></g>`,
		"fallback": "icon-park:bank-transfer",
	});
}

export default Component;
