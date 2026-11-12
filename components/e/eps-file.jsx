import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr3giu5xn.css';
import '../../css/c/ca34baqxh.css';
import '../../css/l/l56nfhv6e.css';
import '../../css/w/wwhv9711a.css';
import '../../css/b/b0cmkdksn.css';
import '../../css/b/bxqj37btp.css';
import '../../css/s/sewtzbcfr.css';

const viewBox = {"width":73,"height":88};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr3giu5xn"/><path class="ca34baqxh"/><path class="l56nfhv6e"/><circle class="wwhv9711a"/><circle class="b0cmkdksn"/><circle class="bxqj37btp"/><path class="sewtzbcfr"/>`,
		"fallback": "thesvg-color:eps-file",
	});
}

export default Component;
