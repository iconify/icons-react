import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/uhtqi2bld.css';
import '../../css/z/zfck3lhqy.css';
import '../../css/y/yedi71t4u.css';
import '../../css/o/ovtvrgkrb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="uhtqi2bld"/><circle class="zfck3lhqy"/><circle class="yedi71t4u"/><path class="ovtvrgkrb"/></g>`,
		"fallback": "icon-park-outline:every-user",
	});
}

export default Component;
