import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/okynwiy-x.css';
import '../../css/m/mf-bscbku.css';
import '../../css/h/hc7f2fbwl.css';
import '../../css/h/htpplm46m.css';
import '../../css/f/fg3kzskfs.css';
import '../../css/f/f_mrfgd4j.css';
import '../../css/r/rasp8ibsa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="okynwiy-x"/><path class="mf-bscbku"/><path clip-rule="evenodd" class="hc7f2fbwl"/><path class="htpplm46m"/><path class="fg3kzskfs"/><path class="f_mrfgd4j"/><path class="rasp8ibsa"/></g>`,
		"fallback": "fluent-emoji-flat:goose",
	});
}

export default Component;
