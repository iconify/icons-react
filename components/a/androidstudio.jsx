import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy2-3ytlx.css';
import '../../css/s/st8yw5ywg.css';
import '../../css/x/xyrv0gjyl.css';
import '../../css/h/h3ktuxbpl.css';
import '../../css/m/m1qi78b-s.css';
import '../../css/f/fg77xbckx.css';
import '../../css/w/wqxk8wvem.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy2-3ytlx"/><path class="st8yw5ywg"/><path class="xyrv0gjyl"/><path class="h3ktuxbpl"/><path class="m1qi78b-s"/><path class="fg77xbckx"/><path class="wqxk8wvem"/>`,
		"fallback": "devicon:androidstudio",
	});
}

export default Component;
