import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/aym_ncbha.css';
import '../../css/t/tp58hcb-p.css';
import '../../css/z/zqtd9-8hz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaeEUdbIv"><g class="v3_i3wktz"><path class="aym_ncbha"/><path class="tp58hcb-p"/><path class="zqtd9-8hz"/></g></mask></defs><path mask="url(#SVGaeEUdbIv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:install",
	});
}

export default Component;
