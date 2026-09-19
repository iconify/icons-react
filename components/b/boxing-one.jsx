import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr36qhbyi.css';
import '../../css/g/gd1m_wu4n.css';
import '../../css/n/nhbex8btt.css';
import '../../css/z/z-npoacvd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tr36qhbyi"><path class="gd1m_wu4n"/><path class="nhbex8btt"/><path class="z-npoacvd"/></g>`,
		"fallback": "icon-park:boxing-one",
	});
}

export default Component;
