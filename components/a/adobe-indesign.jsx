import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m2blynbna.css';
import '../../css/s/svaol_i1h.css';
import '../../css/s/spraj-4ql.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGA3YCcccP"><g class="s9cl3zbei"><path class="m2blynbna"/><path class="svaol_i1h"/><path clip-rule="evenodd" class="spraj-4ql"/></g></mask></defs><path mask="url(#SVGA3YCcccP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:adobe-indesign",
	});
}

export default Component;
