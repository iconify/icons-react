import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/w/wf0gwvbxb.css';
import '../../css/l/lm9e4db0f.css';
import '../../css/l/lazl2-mwt.css';
import '../../css/d/d-m6ebcne.css';
import '../../css/p/pw2bzpbnn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlQzDebyg"><g class="rohhhzb0l"><path class="wf0gwvbxb"/><path class="lm9e4db0f"/><path class="lazl2-mwt"/><path class="d-m6ebcne"/><path class="pw2bzpbnn"/></g></mask></defs><path mask="url(#SVGlQzDebyg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:city-gate",
	});
}

export default Component;
