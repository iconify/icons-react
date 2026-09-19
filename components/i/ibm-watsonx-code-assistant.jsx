import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja9f63bhn.css';
import '../../css/o/ooafr8bth.css';
import '../../css/a/akk8mdbar.css';
import '../../css/k/kjka_pbzl.css';
import '../../css/w/wvuld5bnk.css';
import '../../css/c/cawl76frv.css';
import '../../css/a/a5qjezbio.css';
import '../../css/t/tprbgvb_u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja9f63bhn"/><circle class="ooafr8bth"/><path class="akk8mdbar"/><circle class="kjka_pbzl"/><path class="wvuld5bnk"/><circle class="cawl76frv"/><path class="a5qjezbio"/><circle class="tprbgvb_u"/>`,
		"fallback": "carbon:ibm-watsonx-code-assistant",
	});
}

export default Component;
