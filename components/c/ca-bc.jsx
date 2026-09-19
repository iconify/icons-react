import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/icqymxxin.css';
import '../../css/o/ozd7r4b-o.css';
import '../../css/b/buavps-jn.css';
import '../../css/w/w7m_-ltlk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="icqymxxin"/><path class="ozd7r4b-o"/><path class="buavps-jn"/><path class="w7m_-ltlk"/></g>`,
		"fallback": "circle-flags:ca-bc",
	});
}

export default Component;
