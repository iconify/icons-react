import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/drtx_1_li.css';
import '../../css/k/kbmf7zbig.css';
import '../../css/x/xqa4lusgk.css';
import '../../css/z/zkqbqgb3y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHyhwDbKS"><g class="rohhhzb0l"><path class="drtx_1_li"/><path class="kbmf7zbig"/><circle class="xqa4lusgk"/><path class="zkqbqgb3y"/></g></mask></defs><path mask="url(#SVGHyhwDbKS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bread-machine",
	});
}

export default Component;
