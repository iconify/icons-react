import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p91qinb-v.css';
import '../../css/k/kjp4pobls.css';
import '../../css/h/hmctd3b8w.css';
import '../../css/u/un351ubge.css';
import '../../css/e/evtploeae.css';
import '../../css/b/b7p7ifbmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p91qinb-v"/><path class="kjp4pobls"/><path class="hmctd3b8w"/><path class="un351ubge"/><path class="evtploeae"/><path class="b7p7ifbmh"/></g>`,
		"fallback": "streamline-ultimate-color:folder-upload",
	});
}

export default Component;
