import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buo-lrxjh.css';
import '../../css/e/eiohwv5zo.css';
import '../../css/g/gtix4cb0c.css';
import '../../css/o/o_huqp5cj.css';
import '../../css/n/nend77pcx.css';
import '../../css/b/bahqy-ige.css';
import '../../css/g/g-82y17yx.css';
import '../../css/t/tm607cctb.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buo-lrxjh"/><path class="eiohwv5zo"/><path class="gtix4cb0c"/><path class="o_huqp5cj"/><path class="nend77pcx"/><path class="bahqy-ige"/><path class="g-82y17yx"/><path class="tm607cctb"/>`,
		"fallback": "iconito:flour",
	});
}

export default Component;
