import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/j/jao2s0bkg.css';
import '../../css/w/wjfqwrh9b.css';
import '../../css/n/ndf_41n2w.css';
import '../../css/h/hyd3-wrrp.css';
import '../../css/b/btb6fpb3v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><circle class="jao2s0bkg"/><path class="wjfqwrh9b"/><path class="ndf_41n2w"/><path class="hyd3-wrrp"/><path class="btb6fpb3v"/></g>`,
		"fallback": "icon-park:baby-one",
	});
}

export default Component;
