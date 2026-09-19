import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zxsb6gbnq.css';
import '../../css/k/kz_eqvbal.css';
import '../../css/z/zsl1wsy_w.css';
import '../../css/x/xrkhp3vin.css';
import '../../css/t/t77x8lisl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zxsb6gbnq"/><path class="kz_eqvbal"/><path class="zsl1wsy_w"/><path class="xrkhp3vin"/><path class="t77x8lisl"/></g>`,
		"fallback": "fluent-emoji-flat:cat-with-wry-smile",
	});
}

export default Component;
