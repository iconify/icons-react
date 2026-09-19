import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l9up7cgwq.css';
import '../../css/t/tbtmy19aj.css';
import '../../css/x/x3o8e895h.css';
import '../../css/b/bl4gd2e5a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="l9up7cgwq"/><path class="tbtmy19aj"/><ellipse transform="rotate(-45 14 14)" class="x3o8e895h"/><ellipse transform="rotate(-45 38 38)" class="bl4gd2e5a"/></g>`,
		"fallback": "icon-park-outline:goblet-one",
	});
}

export default Component;
