import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/y/yihstg8dq.css';
import '../../css/y/ygihsgtev.css';
import '../../css/x/xzm23acqn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeKL45lVJ"><g class="hv130ab-t"><path class="yihstg8dq"/><path class="ygihsgtev"/><path class="xzm23acqn"/></g></mask></defs><path mask="url(#SVGeKL45lVJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bowl-one",
	});
}

export default Component;
