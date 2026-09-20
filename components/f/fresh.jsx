import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrr2chbzu.css';
import '../../css/q/qnolq6bsx.css';
import '../../css/m/mmiewcbui.css';
import '../../css/b/btlnj5b2x.css';
import '../../css/h/hp0f-gb7s.css';

const viewBox = {"width":256,"height":216};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrr2chbzu"/><path class="qnolq6bsx"/><path class="mmiewcbui"/><path class="btlnj5b2x"/><path class="hp0f-gb7s"/>`,
		"fallback": "thesvg-color:fresh",
	});
}

export default Component;
