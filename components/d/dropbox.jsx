import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/s-0f-db9c.css';
import '../../css/q/qv8hnbl3b.css';
import '../../css/v/v-py2wbec.css';
import '../../css/v/ved8d44du.css';
import '../../css/n/nymn-iu9v.css';
import '../../css/m/mu928nbcy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="s-0f-db9c"/><path class="qv8hnbl3b"/><path class="v-py2wbec"/><path class="ved8d44du"/><path class="nymn-iu9v"/><path class="mu928nbcy"/></g>`,
		"fallback": "icon-park:dropbox",
	});
}

export default Component;
