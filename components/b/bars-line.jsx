import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-3-isbfd.css';
import '../../css/c/c6irxih5p.css';
import '../../css/z/zyoh9lzam.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-3-isbfd clr-i-outline clr-i-outline-path-1"/><path class="c6irxih5p clr-i-outline clr-i-outline-path-2"/><path class="clr-i-outline clr-i-outline-path-3 zyoh9lzam"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:bars-line",
	});
}

export default Component;
