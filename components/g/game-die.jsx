import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/or0csdbgq.css';
import '../../css/j/jp7am0wid.css';
import '../../css/f/fuhyzz-oy.css';
import '../../css/n/n2lj_gbvl.css';
import '../../css/h/huxf9hb8w.css';
import '../../css/z/zeis9_42h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="or0csdbgq"/><path class="jp7am0wid"/><path class="fuhyzz-oy"/><path class="n2lj_gbvl"/><path class="huxf9hb8w"/><path class="zeis9_42h"/></g>`,
		"fallback": "fluent-emoji-flat:game-die",
	});
}

export default Component;
