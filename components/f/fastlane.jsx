import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drtdhtb_j.css';
import '../../css/c/cqbmk1byz.css';
import '../../css/p/p5ypd6bpk.css';
import '../../css/q/qlqnfnb8d.css';
import '../../css/h/hxyfhfb3p.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drtdhtb_j"/><path class="cqbmk1byz"/><path class="p5ypd6bpk"/><path class="qlqnfnb8d"/><path class="hxyfhfb3p"/>`,
		"fallback": "material-icon-theme:fastlane",
	});
}

export default Component;
