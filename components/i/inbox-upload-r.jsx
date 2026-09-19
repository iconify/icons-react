import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/h/h629go4ys.css';
import '../../css/u/uc8kr5rtb.css';
import '../../css/y/yeq7r9s-w.css';
import '../../css/b/bmn48cc0p.css';
import '../../css/e/e95ct9bzp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="h629go4ys"/><path class="uc8kr5rtb"/><path class="yeq7r9s-w"/><path class="bmn48cc0p"/><path class="e95ct9bzp"/></g>`,
		"fallback": "icon-park:inbox-upload-r",
	});
}

export default Component;
