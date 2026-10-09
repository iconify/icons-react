import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n785abbjb.css';
import '../../css/b/bps3txb3f.css';
import '../../css/y/yaj4psbrg.css';
import '../../css/e/euf1knnse.css';
import '../../css/u/ujaxlznen.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n785abbjb"/><path class="bps3txb3f"/><path class="yaj4psbrg"/><path class="euf1knnse"/><path class="ujaxlznen"/>`,
		"fallback": "energy-icons:data-centre-cooling-20",
	});
}

export default Component;
