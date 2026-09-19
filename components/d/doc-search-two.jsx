import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eouuihhqh.css';
import '../../css/i/id2rl2b9f.css';
import '../../css/f/fgmt0jbpw.css';
import '../../css/w/wnue32lch.css';
import '../../css/b/bs6ga1srf.css';
import '../../css/s/syiuwvbtk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eouuihhqh"/><path class="id2rl2b9f"/><path class="fgmt0jbpw"/><path class="wnue32lch"/><path class="bs6ga1srf"/><path class="syiuwvbtk"/></g>`,
		"fallback": "icon-park:doc-search-two",
	});
}

export default Component;
