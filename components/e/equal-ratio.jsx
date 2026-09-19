import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2ola1bow.css';
import '../../css/d/dgu0vjb4h.css';
import '../../css/m/maid5dnld.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJjjb3cvt"><g class="ft5dv1b6b"><rect class="v2ola1bow"/><path clip-rule="evenodd" class="dgu0vjb4h"/><path class="maid5dnld"/></g></mask></defs><path mask="url(#SVGJjjb3cvt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:equal-ratio",
	});
}

export default Component;
