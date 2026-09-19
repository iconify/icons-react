import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zxsb6gbnq.css';
import '../../css/k/kz_eqvbal.css';
import '../../css/x/xrkhp3vin.css';
import '../../css/e/e6m86db3b.css';
import '../../css/z/zsl1wsy_w.css';
import '../../css/k/kfm7axg5l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zxsb6gbnq"/><path class="kz_eqvbal"/><path class="xrkhp3vin"/><path class="e6m86db3b"/><path class="zsl1wsy_w"/><path class="kfm7axg5l"/></g>`,
		"fallback": "fluent-emoji-flat:crying-cat",
	});
}

export default Component;
