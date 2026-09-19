import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/issgrdd1r.css';
import '../../css/y/ytgl6lbch.css';
import '../../css/c/cg_jlr6fg.css';
import '../../css/x/x6m4tlbsz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGq98cbckh"><g class="rohhhzb0l"><path class="issgrdd1r"/><rect class="ytgl6lbch"/><path class="cg_jlr6fg"/><path class="x6m4tlbsz"/></g></mask></defs><path mask="url(#SVGq98cbckh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:copy-link",
	});
}

export default Component;
