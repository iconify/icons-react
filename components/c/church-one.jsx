import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/u49adpbnw.css';
import '../../css/m/mhozz3bsv.css';
import '../../css/z/zc_e887ki.css';
import '../../css/v/vb3pddc4g.css';
import '../../css/j/jak2mgerv.css';
import '../../css/j/jzrhr5bja.css';
import '../../css/f/fwi7a4b7k.css';
import '../../css/r/r285drrbm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="u49adpbnw"/><path class="mhozz3bsv"/><path class="zc_e887ki"/><path class="vb3pddc4g"/><path class="jak2mgerv"/><path class="jzrhr5bja"/><path class="fwi7a4b7k"/><path class="r285drrbm"/></g>`,
		"fallback": "icon-park:church-one",
	});
}

export default Component;
