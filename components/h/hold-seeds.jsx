import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/ajyf3nzah.css';
import '../../css/s/sqkeg0bva.css';
import '../../css/w/wk-pusb9i.css';
import '../../css/a/aiy3-ubty.css';
import '../../css/k/k39therxd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ajyf3nzah"/><path class="sqkeg0bva"/><circle class="wk-pusb9i"/><circle class="aiy3-ubty"/><circle class="k39therxd"/></g>`,
		"fallback": "icon-park-solid:hold-seeds",
	});
}

export default Component;
