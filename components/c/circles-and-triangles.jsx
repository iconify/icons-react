import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/u/u57jl4baq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGc1YJudgW"><g class="rohhhzb0l"><path class="vkcj4bcdm"/><path class="u57jl4baq"/></g></mask></defs><path mask="url(#SVGc1YJudgW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:circles-and-triangles",
	});
}

export default Component;
