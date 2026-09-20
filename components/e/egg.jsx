import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q62_69bfb.css';
import '../../css/e/ebgyviymh.css';
import '../../css/w/wmf1kublg.css';
import '../../css/z/zc_qphfye.css';
import '../../css/d/dj-fnilqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q62_69bfb"/><path class="ebgyviymh"/><path class="wmf1kublg"/><path class="zc_qphfye"/><path class="dj-fnilqe"/>`,
		"fallback": "token:egg",
	});
}

export default Component;
