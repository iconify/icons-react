import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg-dsubdn.css';
import '../../css/i/ixhyjc11s.css';
import '../../css/a/auwualboc.css';
import '../../css/c/cg11f-byk.css';
import '../../css/i/iu5oxsdyz.css';
import '../../css/f/fm-8knbsv.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 gg-dsubdn"/><path class="clr-i-outline clr-i-outline-path-2 ixhyjc11s"/><path class="auwualboc clr-i-outline clr-i-outline-path-3"/><path class="cg11f-byk clr-i-outline clr-i-outline-path-4"/><path class="clr-i-outline clr-i-outline-path-5 iu5oxsdyz"/><path class="clr-i-outline clr-i-outline-path-6 fm-8knbsv"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:indent-line",
	});
}

export default Component;
