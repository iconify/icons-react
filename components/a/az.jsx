import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/meky6tfum.css';
import '../../css/a/aiid3obtg.css';
import '../../css/b/bdzq151wq.css';
import '../../css/z/zy4mqmbwa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="meky6tfum"/><path class="aiid3obtg"/><path class="bdzq151wq"/><path class="zy4mqmbwa"/></g>`,
		"fallback": "circle-flags:az",
	});
}

export default Component;
