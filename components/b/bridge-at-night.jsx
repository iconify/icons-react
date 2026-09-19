import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zd6cshb1a.css';
import '../../css/a/a3ljh9bwu.css';
import '../../css/r/rd1e-ibfw.css';
import '../../css/k/k2sltvbsb.css';
import '../../css/m/m2i5-db6l.css';
import '../../css/c/cepmp8q-z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zd6cshb1a"/><path class="a3ljh9bwu"/><path class="rd1e-ibfw"/><path class="k2sltvbsb"/><path class="m2i5-db6l"/><path class="cepmp8q-z"/></g>`,
		"fallback": "fluent-emoji-flat:bridge-at-night",
	});
}

export default Component;
