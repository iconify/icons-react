import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/thuh_d5vl.css';
import '../../css/e/e0udh9f6u.css';
import '../../css/o/o79q21b5j.css';
import '../../css/e/ej7ljibcl.css';
import '../../css/m/mlhe3shmo.css';
import '../../css/b/bgewxs8fw.css';
import '../../css/y/ytscfjbvi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="thuh_d5vl"/><path class="e0udh9f6u"/><path class="o79q21b5j"/><path class="ej7ljibcl"/><path class="mlhe3shmo"/><path class="bgewxs8fw"/><path class="ytscfjbvi"/></g>`,
		"fallback": "fluent-emoji-flat:beaver",
	});
}

export default Component;
