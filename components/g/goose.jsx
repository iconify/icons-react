import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhzw11g-c.css';
import '../../css/i/ijkguh_1b.css';
import '../../css/n/n1u92sbdk.css';
import '../../css/e/eqqzzhten.css';
import '../../css/h/h8wtp5bbt.css';
import '../../css/a/a7_tu1bll.css';
import '../../css/e/ecyv2sh7z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhzw11g-c"/><path class="ijkguh_1b"/><path class="n1u92sbdk"/><g class="eqqzzhten"><path class="h8wtp5bbt"/><path class="a7_tu1bll"/><path class="ecyv2sh7z"/></g>`,
		"fallback": "openmoji:goose",
	});
}

export default Component;
